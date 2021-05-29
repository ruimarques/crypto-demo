import { useState } from 'react';
import styles from './Timespan.module.css';

const timespans = [
  {
    key: '1d',
    label: '1D',
  },
  {
    key: '1w',
    label: '1W',
  },
  {
    key: '1m',
    label: '1M',
  },
  {
    key: '3m',
    label: '3M',
  },
  {
    key: 'all',
    label: 'ALL',
  },
];

const TimespanComponent = () => {
  const [active, setActive] = useState('');
  return (
    <>
      <div className={styles.container}>
        <span
          className={`${styles.dot} ${active === 'live' ? 'active' : ''}`}
        ></span>
        <span
          onClick={() => setActive('live')}
          className={`${styles.live} ${active === 'live' ? 'active' : ''}`}
        >
          LIVE
        </span>
        <ul className={styles.list}>
          {timespans.map((item, index) => (
            <li
              className={`${styles.listItem} ${
                item.key === active ? 'active' : ''
              }`}
              key={item.key}
              onClick={() => setActive(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TimespanComponent;
