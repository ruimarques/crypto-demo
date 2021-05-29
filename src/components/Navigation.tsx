import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { ReactComponent as CryptoLogo } from '../assets/crypto.svg';
import { ReactComponent as RewardsLogo } from '../assets/rewards.svg';
import { ReactComponent as CardsLogo } from '../assets/cards.svg';

const menuItems = [
  {
    key: 'crypto',
    logo: CryptoLogo,
  },
  {
    key: 'rewards',
    logo: RewardsLogo,
  },
  {
    key: 'cards',
    logo: CardsLogo,
  },
];

const NavigationComponent = () => {
  return (
    <>
      <ul>
        {menuItems.map((item) => (
          <li key={item.key}>
            <NavLink className={styles.link} to={`/${item.key}`}>
              {React.createElement(item.logo, {})}
              {item.key}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavigationComponent;
