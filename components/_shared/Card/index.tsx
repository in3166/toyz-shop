import styles from './card.module.scss';

const Card = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
