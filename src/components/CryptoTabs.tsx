import { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ReactComponent as MeatballsLogo } from '../assets/meatballs.svg';
import { ReactComponent as CogIcon } from '../assets/cog.svg';
import { ReactComponent as LockIcon } from '../assets/lock.svg';
import styles from './CryptoTabs.module.css';

const menuItems = [
  {
    key: 'portfolio',
    text: 'Portfolio',
  },
  {
    key: 'prices',
    text: 'Prices',
  },
  {
    key: 'defi',
    text: 'DeFi',
  },
  {
    key: 'nfts',
    text: 'NFTs',
  },
  {
    key: 'accounts',
    text: 'Accounts',
  },
];

const CryptoTabsComponent = () => {
  let match = useRouteMatch();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <>
      <ul className={styles.tabs}>
        {menuItems.map((item) => (
          <li key={item.key}>
            <NavLink
              exact
              className={styles.link}
              to={`${match.url}/${item.key}`}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li>
          <button className={styles.ellipsis} onClick={toggleMenu}>
            <MeatballsLogo />
          </button>
          {isMenuOpen && <EllipsisMenuComponent />}
        </li>
      </ul>
    </>
  );
};

const EllipsisMenuComponent = () => {
  return (
    <div className={styles.ellipsisMenu}>
      <button className={styles.menuBtn}>
        <span className={`${styles.icon}`}>
          <LockIcon />
        </span>
        <span>Lock Crypto Wallet</span>
      </button>
      <button className={styles.menuBtn}>
        <span className={`${styles.icon}`}>
          <CogIcon />
        </span>
        <span>Settings</span>
      </button>
    </div>
  );
};

export default CryptoTabsComponent;
