export const performSearch = async (query: string) => {
  const response = await fetch(
    `https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
