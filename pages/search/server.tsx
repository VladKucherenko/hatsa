import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import { AfiProductType } from "../types/types";
import { ResponseType } from "../types/response";
import { performSearch } from "./performSearch";
import { useDebounce } from "../hooks/useDebounce";

export const getServerSideProps = async ({ params, req, res, query }) => {
  try {
    const response: ResponseType = await performSearch(query.text ?? "");

    const searchResults: AfiProductType[] = response.data;

    return {
      props: {
        searchResults,
      },
    };
  } catch (e) {
    console.log(e.message);
  }
};

//TODO: InferGetServerSidePropsType<typeof getServerSideProps>
const Search = ({ searchResults }) => {
  const { query } = useRouter();

  const [searchText, setSearchText] = useState<string>(
    (query.text as string) ?? ""
  );

  const debouncedSearchTerm: string = useDebounce<string>(searchText, 1000);

  useEffect(() => {
    Router.push({
      pathname: "/search/server",
      search: `?text=${debouncedSearchTerm}`,
    });
  }, [debouncedSearchTerm]);

  const onChangeHandler = (event) => {
    setSearchText(event.target.value);
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
        value={searchText}
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
