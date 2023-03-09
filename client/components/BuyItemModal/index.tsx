import { loadTossPayments } from '@tosspayments/payment-sdk';

import { useI18n, useOnClickOutside, useState } from 'hooks';
import { IProductItem } from 'types/product';
import { BASE_URL } from 'fixtures';
import { currencyFormatter } from 'utils';
import { Modal } from 'components/_shared';
import styles from './buyItemModal.module.scss';
import { cx } from 'styles';

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || '';
interface IBuyItemModalProps {
  onClose: () => void;
  setMessage: (text: string) => void;
  product: IProductItem;
  buyer?: string;
}

const BuyItemModal = ({ onClose, product, buyer, setMessage }: IBuyItemModalProps) => {
  const t = useI18n();
  const buyMenuRef = useOnClickOutside(() => setOpenMenu(false));
  const [openMenu, setOpenMenu] = useState(false);

  const handleBuyMenuOpen = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickBuy = async (type: boolean) => {
    loadTossPayments(clientKey)
      .then((tossPayments) => {
        // 카드 결제 메서드 실행
        tossPayments
          .requestPayment(type ? '가상계좌' : '카드', {
            amount: product?.price,
            orderId: `${product._id}`,
            orderName: `buyProduct${product._id}`,
            customerName: `toy-z`,
            successUrl: `${BASE_URL}/success?seller=${product?.owner?._id}&price=${product?.price}&buyer=${buyer}`,
            failUrl: `${BASE_URL}/fail?seller=${product?.owner?._id}&price=${product?.price}&buyer=${buyer}`,
            validHours: 24,
            cashReceipt: {
              type: '소득공제',
            },
          })
          .catch(() => {
            setMessage('결제가 취소되었습니다.');
            onClose();
          });
      })
      .catch(() => {
        setMessage('결제 페이지 로드를 실패하였습니다.');
        onClose();
      });
  };

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('buyModal.header')}`}</header>
      <form className={styles.content}>
        <dl>
          <div>
            <dt>{`${t('buyModal.title')}`}</dt>
            <dd>{product?.title}</dd>
          </div>
          <div>
            <dt>{`${t('buyModal.image')}`}</dt>
            <dd>
              <img src={product?.image} alt='items' />
            </dd>
          </div>
          <div>
            <dt>{`${t('buyModal.price')}`}</dt>
            <dd>
              {currencyFormatter(product?.price)} <sub>(원)</sub>
            </dd>
          </div>
        </dl>
      </form>
      <footer className={styles.footer}>
        <button type='button' aria-label='close the buy modal' className={styles.cancelButton} onClick={onClose}>
          {`${t('buyModal.closeButton')}`}
        </button>
        <div className={styles.buyButtonWrapper} ref={buyMenuRef}>
          <button
            type='button'
            aria-label='toggle the buy menu'
            className={styles.buyButton}
            onClick={handleBuyMenuOpen}
          >
            {`${t('buyModal.buyButton')}`}
          </button>
          <ul className={cx(styles.buyMenu, { [styles.menuOpen]: openMenu })}>
            <li>
              <button type='button' aria-label='enter a virtual account page' onClick={() => handleClickBuy(true)}>
                가상 계좌
              </button>
            </li>
            <li>
              <button type='button' aria-label='enter a card page' onClick={() => handleClickBuy(false)}>
                카드
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </Modal>
  );
};

export default BuyItemModal;
