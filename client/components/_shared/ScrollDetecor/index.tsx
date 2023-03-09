import { Dispatch, SetStateAction } from 'react';
import styles from './scrollDetecor.module.scss';

interface IScrollDetecorProps {
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

const ScrollDetecor = ({ setTarget }: IScrollDetecorProps) => <li ref={setTarget} className={styles.scrollTargetLi} />;

export default ScrollDetecor;
