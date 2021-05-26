import { NavLink, useRouteMatch } from 'react-router-dom';
import styles from './CryptoTabs.module.css';

const CryptoTabsComponent = () => {
  let match = useRouteMatch();

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
          <button>...</button>
        </li>
      </ul>
    </>
  );
};

export default CryptoTabsComponent;
