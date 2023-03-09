import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';

import { useUserLikes } from 'hooks';
import { dbConnect } from 'lib/dbConnect';
import { fetchToAPI } from 'utils';
import { getProductById } from 'lib/controllers';
import { getCommentsByProductId } from 'lib/controllers/comments';
import { SnackBar, Container, Loading } from 'components/_shared';
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar';
import Comments from 'components/Comments';
import { HeartFillIcon, HeartOutlineIcon } from 'public/svgs';
import styles from './itemDetailPage.module.scss';
import ProductContent from '@components/ProductContent';

const ItemDetailPage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { product, commnets } = pageProps;

  const { message, setMessage } = useSnackbar(3000);

  const router = useRouter();
  const { likes, user, handleClickLike } = useUserLikes();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (likes.some((value: { _id: string }) => value._id === product?._id)) {
      setIsLiked(true);
    }
  }, [likes, product?._id]);

  if (router.isFallback) {
    return <Loading />;
  }

  const handleClickEdit = () => {
    router.push(`/product?id=${product._id}`);
  };

  const handleClickDelete = async () => {
    const result = await fetchToAPI(`/api/products/${product?._id}`, 'DELETE');
    if (result.success) {
      router.push(`/`);
    }
  };

  const editButton = (
    <div className={styles.editButtonWrapper}>
      <button type='button' onClick={handleClickEdit} className={styles.editButton}>
        <Image width={17} height={17} src='/svgs/edit.png' alt='edit product info button' />
      </button>
      <button type='button' onClick={handleClickDelete} className={styles.deleteButton}>
        <Image width={17} height={17} src='/svgs/bin.png' alt='edit product info button' />
      </button>
    </div>
  );

  const likeButton = (
    <button
      type='button'
      aria-label='Add a product to like'
      className={styles.likeButton}
      onClick={(e) => handleClickLike(e, product, isLiked, setIsLiked)}
    >
      {isLiked ? <HeartFillIcon /> : <HeartOutlineIcon />}
    </button>
  );

  const headerButton = user?.id === product.owner.id ? editButton : likeButton;

  return (
    <>
      <Head>
        <title>Toyz Item</title>
      </Head>
      <Container color='white' width='lg'>
        <header className={styles.header}>
          <h3>{product?.title}</h3>
          {user && headerButton}
        </header>
        <main className={styles.main}>
          <ProductContent product={product} user={user} setMessage={setMessage} />
        </main>

        <Comments productId={product._id} commnets={commnets} />
        {message && <SnackBar message={message} setMessage={setMessage} status='warning' />}
      </Container>
    </>
  );
};

interface IGetServerSideProps {
  locale: string;
  locales: string[];
  params: ParsedUrlQuery;
}

export const getServerSideProps = async (context: IGetServerSideProps) => {
  const { locale, locales, params } = context;
  await dbConnect();
  const product = await getProductById(params.itemId);
  const commnets = await getCommentsByProductId(params.itemId);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
      locale,
      product: JSON.parse(JSON.stringify(product)),
      commnets: JSON.parse(JSON.stringify(commnets)),
    },
  };
};

export default ItemDetailPage;
