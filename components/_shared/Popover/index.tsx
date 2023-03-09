import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import { useOnClickOutside } from 'hooks';
import styles from './popover.module.scss';
import { cx } from 'styles';

interface IPopoverProps {
  popoverList: Array<{ title: string; path: string }>;
  size?: 'large' | 'medium' | 'small';
  popoverIsOpen: boolean;
  setPopoverIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Popover = ({ popoverList, size = 'small', popoverIsOpen, setPopoverIsOpen }: IPopoverProps) => {
  const router = useRouter();

  const handleListClick = (index: number) => {
    router.push(popoverList[index].path);
    setPopoverIsOpen(false);
  };

  return (
    <ul className={styles.selectBox}>
      {popoverList.map((value, index) => {
        return (
          <li className={styles.option} key={value.title}>
            <button
              type='button'
              aria-label='click popover menu'
              value={index}
              data-value={value}
              onClick={() => handleListClick(index)}
            >
              {value.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Popover;
