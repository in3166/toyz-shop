import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { throttle } from 'lodash';

import { IProductItem } from 'types/product';
import { IBanner } from 'types/banners';
import { BASE_URL } from 'fixtures';
import { Card } from 'components/_shared';
import useDragScroll from './useDragScroll';
import styles from './bannerList.module.scss';

interface IBannerList {
  banners: IBanner[];
  setBanners: Dispatch<SetStateAction<IBanner[]>>;
}
const BannerList = ({ banners, setBanners }: IBannerList) => {
  const { isLoading, data } = useQuery(
    ['getAllBannersData'],
    () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/banners`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => {
          const result = await response.json();
          return result.banners;
        })
        .catch((err) => {
          console.log('err:', err);
        }),
    {
      // error , success false 로직 추가
      enabled: true,
      staleTime: 6 * 50 * 1000,
      useErrorBoundary: true,
    }
  );

  useEffect(() => {
    if (!isLoading) {
      setBanners(data);
    }
  }, [data, isLoading, setBanners]);

  const handleDeleteBanner = async (id: string) => {
    const response = await fetch(`${BASE_URL}/api/banners`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'apllication/jspn' },
      body: id,
    });
    const result = await response.json();
    if (result.success) {
      setBanners((prev) => prev.filter((value: IBanner) => value?._id !== id));
    }
  };
  const scrollRef = useRef<HTMLUListElement>(null);
  const { onDragEnd, onDragStart, onDragMove, isDrag } = useDragScroll(scrollRef);

  const onThrottleDragMove = throttle(onDragMove, 50);

  return (
    <>
      <header>
        <h2>Banner List</h2>
      </header>
      <ul
        role='presentation'
        className={styles.bannerListWrapper}
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onThrottleDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {banners?.map((value: { _id: string; item: IProductItem }) => {
          return (
            <li key={value?._id}>
              <Card>
                <div className={styles.infoWrapper}>
                  <button
                    type='button'
                    aria-label='remove item from banner lise'
                    className={styles.deleteButton}
                    onClick={() => handleDeleteBanner(value?._id)}
                  >
                    x
                  </button>
                  <label className={styles.titleLabel}>{value.item.title}</label>
                  <img src={value.item.image} alt={value.item.title} />
                  <label className={styles.ownerLabel}>Owner : {value.item.owner.id}</label>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BannerList;
