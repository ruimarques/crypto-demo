import { useEffect, useState } from 'react';
import { formatCurrency, randomIntFromInterval } from '../utils';
import { CoinListItem } from './CoinList';
import SearchComponent from './Search';
import CoinListComponent from './CoinList';
import TimespanComponent from './Timespan';
import styles from './Portfolio.module.css';

const coins: CoinListItem[] = [
  {
    name: 'Basic Attention Token',
    fiatAmount: 10810.03,
    currency: 'USD',
    amount: '10,037.9028',
    unit: 'BAT',
  },
  {
    name: 'Ethereum',
    fiatAmount: 872.48,
    currency: 'USD',
    amount: '0.31178',
    unit: 'ETH',
  },
  {
    name: 'Binance Coin',
    fiatAmount: 151.56,
    currency: 'USD',
    amount: '0.4736',
    unit: 'BNB',
  },
  {
    name: 'Bitcoin',
    fiatAmount: 49.93,
    currency: 'USD',
    amount: '0.001012',
    unit: 'BTC',
  },
];

const calculateBalance = (data: CoinListItem[]) => {
  return data.reduce((acc, curr) => {
    return acc + curr.fiatAmount;
  }, 0);
};

const PortfolioComponent = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [tokens, setTokens] = useState<CoinListItem[]>(coins);
  const [filteredTokens, setFilteredTokens] = useState<CoinListItem[]>(coins);

  const handleAdd = () => {
    const copyIndex = randomIntFromInterval(0, tokens.length - 1);

    // mock a new coin by copying a random one from the existing list
    setTokens([...tokens, tokens[copyIndex]]);
  };

  const handleSelectedTimespan = (timespan: string) => {
    console.log(timespan);
  };

  useEffect(() => {
    setFilteredTokens(
      tokens.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    );
  }, [searchInput, tokens]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.balance}>
          <h1>Balance</h1>
          <h2>{formatCurrency(calculateBalance(tokens))}</h2>
        </div>

        <TimespanComponent onSelect={handleSelectedTimespan} />
      </header>

      <img
        src="/assets/mock-chart.png"
        alt="Portfolio chart"
        className={styles.chart}
      />

      <div className={styles.tokens}>
        <SearchComponent
          placeholder={'Search Coins'}
          onSearchInput={(input) => {
            setSearchInput(input);
          }}
        />

        <CoinListComponent items={filteredTokens} onAdd={handleAdd} />
      </div>
    </>
  );
};

export default PortfolioComponent;
