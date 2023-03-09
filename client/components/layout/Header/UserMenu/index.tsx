import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import { useI18n, useState } from 'hooks';
import { BASE_URL } from 'fixtures';
import { ProfileIcon, SettingIcon } from 'public/svgs';
import { cx } from 'styles';
import styles from '../header.module.scss';
import Popover from '@components/_shared/Popover';

const UserMenu = ({ lang }: { lang: string }) => {
  const t = useI18n();
  const router = useRouter();

  const { data: session } = useSession();
  const language = lang === '한국어' || lang === 'Korean' ? '' : '/en';
  const loggedOutMenu = !session && (
    <>
      <li>
        <Link
          href='/signin'
          aria-label='link to signin page'
          className={cx(styles.userMenu, { [styles.isActive]: router.pathname === '/signin' })}
        >
          {`${t('common:gnb.signin')}`}
        </Link>
      </li>
      <li>
        <Link
          href='/signup'
          aria-label='link to signup page'
          className={cx(styles.userMenu, { [styles.isActive]: router.pathname === '/signup' })}
        >
          {`${t('common:gnb.signup')}`}
        </Link>
      </li>
    </>
  );
  const [isHover, setIsHover] = useState(false);
  const onHover = () => {
    setIsHover(true);
  };

  const onHoverLeave = () => {
    setIsHover(false);
  };

  const loggedInMenu = session && (
    <>
      <li className={cx(styles.userMenu, { [styles.isActive]: router.pathname === '/product' })}>
        <Link href='/product' aria-label='link to upload product page'>
          <button type='button' aria-label='enter upload product page'>{`${t('gnb.addItem')}`}</button>
        </Link>
      </li>
      <li className={styles.userMenu}>
        <button type='button' aria-label='sign out' onClick={() => signOut({ callbackUrl: `${BASE_URL}/${language}` })}>
          {`${t('common:gnb.logout')}`}
        </button>
      </li>
      <li>
        {session?.user?.name !== 'admin' ? (
          <button
            type='button'
            onMouseEnter={onHover}
            onMouseLeave={onHoverLeave}
            className={styles.settingIcon}
            aria-label='link to User Setting page'
          >
            <ProfileIcon />
            {isHover && (
              <Popover
                popoverList={[
                  { title: '설정', path: '/setting/user' },
                  { title: '채팅', path: '/chatRooms' },
                ]}
                popoverIsOpen={isHover}
                setPopoverIsOpen={setIsHover}
              />
            )}
          </button>
        ) : (
          <button type='button' className={styles.settingIcon} aria-label='Enter User Setting Page'>
            <Link href='/setting/admin' aria-label='link to Admin Setting page'>
              <SettingIcon />
            </Link>
          </button>
        )}
      </li>
    </>
  );

  return (
    <>
      {loggedOutMenu}
      {loggedInMenu}
    </>
  );
};

export default UserMenu;
