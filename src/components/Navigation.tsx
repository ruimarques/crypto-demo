import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const NavigationComponent = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink className={styles.link} to={`/crypto`}>
            Crypto
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to={`/rewards`}>
            Rewards
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to={`/cards`}>
            Cards
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavigationComponent;
