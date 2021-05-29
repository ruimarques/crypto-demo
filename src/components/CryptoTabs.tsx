import { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ReactComponent as MeatballsLogo } from '../assets/meatballs.svg';
import { ReactComponent as CogIcon } from '../assets/cog.svg';
import { ReactComponent as LockIcon } from '../assets/lock.svg';
import styles from './CryptoTabs.module.css';

const CryptoTabsComponent = () => {
  let match = useRouteMatch();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <>
      <ul className={styles.tabs}>
        <li>
          <NavLink exact className={styles.link} to={`${match.url}/portfolio`}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink exact className={styles.link} to={`${match.url}/prices`}>
            Prices
          </NavLink>
        </li>
        <li>
          <NavLink exact className={styles.link} to={`${match.url}/defi`}>
            DeFi
          </NavLink>
        </li>
        <li>
          <NavLink exact className={styles.link} to={`${match.url}/nfts`}>
            NFTs
          </NavLink>
        </li>
        <li>
          <NavLink exact className={styles.link} to={`${match.url}/accounts`}>
            Accounts
          </NavLink>
        </li>
        <li>
          <span className={styles.ellipsis} onClick={toggleMenu}>
            <MeatballsLogo />
          </span>
          {isMenuOpen && (
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
          )}
        </li>
      </ul>
    </>
  );
};

export default CryptoTabsComponent;
