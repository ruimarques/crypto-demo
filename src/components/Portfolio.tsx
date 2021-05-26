import { useState } from 'react';
import { CoinListItem } from './CoinList';
import SearchComponent from './Search';
import CoinListComponent from './CoinList';

const coins: CoinListItem[] = [
  {
    name: 'Basic Attention Token',
    fiat: '$10,810,03',
    amount: '10,037.9028',
    unit: 'BAT',
  },
  {
    name: 'Ethereum',
    fiat: '$872.48',
    amount: '0.31178',
    unit: 'ETH',
  },
  {
    name: 'Binance Coin',
    fiat: '$151.56',
    amount: '0.4736',
    unit: 'BNB',
  },
  {
    name: 'Bitcoin',
    fiat: '$49.93',
    amount: '0.001012',
    unit: 'BTC',
  },
];

const PortfolioComponent = () => {
  const [searchInput, setSearchInput] = useState<string | null>(null);

  return (
    <>
      <h3>Balance</h3>
      <SearchComponent
        onSearchInput={(input) => {
          setSearchInput(input);
        }}
      />

      <CoinListComponent filter={searchInput} items={coins} />
    </>
  );
};

export default PortfolioComponent;
