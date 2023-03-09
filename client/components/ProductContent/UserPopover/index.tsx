import { MouseEvent, useState } from 'react';

import { useOnClickOutside } from 'hooks';
import styles from './userPopover.module.scss';
import { cx } from 'styles';
import Popover from 'components/_shared/Popover';

interface IUserPopoverProps {
  sendTo: string | null | undefined;
  size?: 'large' | 'medium' | 'small';
}

const UserPopover = ({ sendTo, size = 'small' }: IUserPopoverProps) => {
  const [listIsOpen, setListIsOpen] = useState(false);
  const popoverList = [
    { title: '쪽지 보내기', path: '/setting/user/mail' },
    { title: '채팅하기', path: '/setting/user/chat' },
  ];
  const handleVisibleList = () => {
    setListIsOpen((prev) => !prev);
  };

  const handleOnClose = () => {
    setListIsOpen(false);
  };
  const UserPopoverRef = useOnClickOutside(handleOnClose);

  return (
    <div className={cx(styles.select, styles[size], { [styles.listIsOpen]: listIsOpen })} ref={UserPopoverRef}>
      {sendTo && (
        <button type='button' onClick={handleVisibleList}>
          {sendTo}
        </button>
      )}
      {listIsOpen && <Popover popoverList={popoverList} popoverIsOpen={listIsOpen} setPopoverIsOpen={setListIsOpen} />}
    </div>
  );
};

export default UserPopover;
