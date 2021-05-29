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

interface TimespanProps {
  onSelect: (k: string) => void;
}

const TimespanComponent = (props: TimespanProps) => {
  const [active, setActive] = useState('');

  const handleSelection = (key: string) => {
    setActive(key);
    props.onSelect(key);
  };

  const getActiveClass = (key: string) => {
    return active === key ? 'active' : '';
  };

  return (
    <>
      <div className={styles.container}>
        <span className={`${styles.dot} ${getActiveClass('live')}`}></span>
        <button
          onClick={() => handleSelection('live')}
          className={`${styles.live} ${getActiveClass('live')}`}
        >
          LIVE
        </button>

        {timespans.map((item) => (
          <button
            className={`${styles.listItem} ${
              item.key === active ? 'active' : ''
            }`}
            key={item.key}
            onClick={() => handleSelection(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default TimespanComponent;
