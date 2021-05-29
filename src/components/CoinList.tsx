import { formatCurrency } from '../utils';
import styles from './CoinList.module.css';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';

export interface CoinListItem {
  name: string;
  fiatAmount: number;
  currency: string;
  amount: string;
  unit: string;
}

interface CoinListProps {
  filter?: string;
  items: CoinListItem[];
  onAdd: () => void;
}

const CoinListComponent = (props: CoinListProps) => {
  return (
    <>
      <ul className={styles.list}>
        {props.items.map((item, index) => (
          <li key={item.unit + index} className={styles.item}>
            <img
              src={`/assets/${item.unit.toLocaleLowerCase()}.png`}
              alt={`${item.name} logo.`}
            />
            <span className={styles.name}>{item.name}</span>
            <div className={styles.currencies}>
              <span className={styles.fiat}>
                {formatCurrency(item.fiatAmount, item.currency)}
              </span>
              <span className={styles.crypto}>
                {item.amount + ' ' + item.unit}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.addBtn} onClick={props.onAdd}>
        <span className={`${styles.plusIcon}`}>
          <PlusIcon />
        </span>
        <span>Add Coin</span>
      </button>
    </>
  );
};

export default CoinListComponent;
