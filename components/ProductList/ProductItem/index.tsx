import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import { useI18n } from 'hooks';
import { IProductItem } from 'types/product';
import { IUser } from 'types/user';
import { currencyFormatter, handleProductStatus } from 'utils';
import { HeartFillIcon, HeartOutlineIcon } from 'public/svgs';
import styles from './productItem.module.scss';

interface ICardProps {
  product: IProductItem;
  user: IUser | undefined;
  likes: IProductItem[];
  handleClickLike: (
    e: MouseEvent<HTMLButtonElement>,
    product: IProductItem,
    isLiked: boolean,
    setIsLiked: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
}

const ProductItem = ({ product, user, likes, handleClickLike }: ICardProps) => {
  const t = useI18n();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (user && user.role === 1 && likes.length > 0) {
      const isLike = likes.some((value) => value?._id === product._id);
      setIsLiked(isLike);
    }
  }, [likes, product._id, user]);

  return (
    <li className={styles.card} title={product.title}>
      <Link href={`/product/${product._id}`} aria-label='link to product detail page'>
        <h3 className={styles.header}>
          <div className={styles.title}>{product.title}</div>
          <button
            type='button'
            aria-label='Add a product to like'
            className={styles.likeButton}
            onClick={(e) => handleClickLike(e, product, isLiked, setIsLiked)}
          >
            {isLiked ? <HeartFillIcon /> : <HeartOutlineIcon />}
          </button>
        </h3>

        <img src={product.image} alt={product.title} className={styles.productImage} />

        <dl>
          <div>
            <dt>{`${t('common:owner')}`}</dt>
            <dd>{product.owner?.name}</dd>
          </div>
          <div>
            <dt>{`${t('common:price')}`}</dt>
            <dd>{currencyFormatter(product.price, 'tenThousand')} 만원</dd>
          </div>
          <div>
            <dt>{`${t('common:date')}`}</dt>
            <dd>{dayjs(product.createdAt).format('YY-MM-DD')}</dd>
          </div>
          <div>
            <dt>{`${t('common:status')}`}</dt>
            <dd>{`${t(handleProductStatus(product?.status))}`}</dd>
          </div>
        </dl>
      </Link>
    </li>
  );
};

export default ProductItem;
