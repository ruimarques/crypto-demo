import classNames from 'classnames';
import { useState } from 'react';
import styles from './Search.module.css';

export interface SearchResult {
  id: number;
}

interface SearchProps<T> {
  placeholder: string;
  query?: string | null;
  onSearch?: (a: T) => void;
  onSearchInput: (a: string) => void;
  onCancel?: () => void;
}

const SearchComponent = <T,>(props: SearchProps<T>) => {
  const [input, setInput] = useState(props.query || '');

  const handleSearch = (input: string) => {
    if (!input) {
      return;
    }

    props.onSearchInput(input);
  };

  return (
    <>
      <div className="control has-icons-left">
        <input
          type="text"
          className={`input ${styles.customInput}`}
          placeholder={props.placeholder}
          autoFocus
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
        ></input>
        <span className="icon is-small is-left">
          <img src={`/assets/search.png`} alt="Search icon" />
        </span>
      </div>
    </>
  );
};

export default SearchComponent;
