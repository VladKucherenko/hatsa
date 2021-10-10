import { AfiProductType } from "../types/types";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import { ResponseType } from "../types/response";
import { performSearch } from "./performSearch";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Array<AfiProductType>>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedSearchTerm: string = useDebounce<string>(inputValue, 1000);

  useEffect(() => {
    performSearch(debouncedSearchTerm).then((results: ResponseType) => {
      setSearchResults(results.data);
    });
  }, [debouncedSearchTerm]);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">
        Search for:
      </label>
      <input
        id="searchQuery"
        type="text"
        className="border"
        value={inputValue}
        onChange={onChangeHandler}
      />
      <ul>
        {searchResults?.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
