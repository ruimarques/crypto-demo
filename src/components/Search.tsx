import classNames from 'classnames';
import { useState } from 'react';

export interface SearchResult {
  id: number;
}

interface SearchProps<T> {
  query?: string | null;
  onSearch?: (a: T) => void;
  onSearchInput: (a: string) => void;
  onCancel?: () => void;
}

const SearchComponent = <T,>({
  query,
  onSearch,
  onSearchInput,
  onCancel,
}: SearchProps<T>) => {
  const [input, setInput] = useState(query || '');

  const handleSearch = (input: string) => {
    if (!input) {
      return;
    }

    onSearchInput(input);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Postal Code"
          autoFocus
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
        ></input>
      </div>
    </>
  );
};

export default SearchComponent;
