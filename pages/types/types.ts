export interface AfiProductType {
  id:            string;
  pid:           string;
  url:           string;
  dupe:          boolean;
  product:       Product;
  offerer:       Offerer;
  brand:         string;
  delivery_text: string;
  category:      string[];
}

export interface Offerer {
  logo:   string;
  domain: string;
  name:   string;
}

export interface Product {
  image: string;
  price: Price;
  title: string;
}

export interface Price {
  low:      number;
  currency: string;
}
