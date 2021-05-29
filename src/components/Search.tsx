import { useState } from 'react';
import styles from './Search.module.css';
import { ReactComponent as ClearIcon } from '../assets/clear.svg';

interface SearchProps {
  placeholder: string;
  onSearchInput: (a: string) => void;
}

const SearchComponent = (props: SearchProps) => {
  const [input, setInput] = useState('');

  const handleClear = () => {
    setInput('');
    props.onSearchInput('');
  };

  return (
    <>
      <div
        className="control has-icons-left has-icons-right"
        style={{ position: 'relative' }}
      >
        <input
          type="text"
          className={`input ${styles.customInput}`}
          placeholder={props.placeholder}
          autoFocus
          value={input}
          onInput={(e) => {
            setInput(e.currentTarget.value);
            props.onSearchInput(e.currentTarget.value);
          }}
        ></input>
        <span className="icon is-small is-left">
          <img src={`/assets/search.png`} alt="Search icon" />
        </span>
        {input && (
          <span className={`${styles.clearIcon}`} onClick={handleClear}>
            <ClearIcon />
          </span>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
