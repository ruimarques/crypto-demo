export interface CoinListItem {
  name: string;
  fiat: string;
  amount: string;
  unit: string;
}

interface CoinListProps {
  filter?: string | null;
  items: CoinListItem[];
}

const CoinListComponent = (props: CoinListProps) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <li key={item.unit}>
            <img
              src={`/assets/${item.unit.toLocaleLowerCase()}.png`}
              alt="Logo"
            />
            {item.name} {item.fiat} {item.amount + ' ' + item.unit}
          </li>
        ))}
      </ul>
      <button className="addBtn">Add Coin</button>
    </>
  );
};

export default CoinListComponent;
