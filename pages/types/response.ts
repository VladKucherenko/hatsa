import { AfiProductType } from './types';

export interface ResponseType {
  success: boolean;
  data:    AfiProductType[];
  meta:    Meta;
}

export interface Meta {
  pagination:   Pagination;
  es:           Es;
  request:      Request;
  aggregations: Aggregations;
}

export interface Aggregations {
  brands:         Brands;
  price_range:    AggregationsPriceRange;
  offerers:       Brands;
  categories:     Brands;
  selected:       Selected;
  delivery_texts: Brands;
}

export interface Brands {
  doc_count: number;
  data:      Data;
}

export interface Data {
  doc_count_error_upper_bound: number;
  sum_other_doc_count:         number;
  buckets:                     Bucket[];
}

export interface Bucket {
  key:       string;
  doc_count: number;
}

export interface AggregationsPriceRange {
  doc_count: number;
  max_price: MaxPriceClass;
  min_price: MaxPriceClass;
}

export interface MaxPriceClass {
  value: number;
}

export interface Selected {
  doc_count:      number;
  brands:         Data;
  price_range:    SelectedPriceRange;
  categories:     Data;
  offerers:       Data;
  delivery_texts: Data;
}

export interface SelectedPriceRange {
  count: number;
  min:   number;
  max:   number;
  avg:   number;
  sum:   number;
}

export interface Es {
  index_prefix: string;
}

export interface Pagination {
  page:     number;
  pagesize: number;
  total:    Total;
}

export interface Total {
  value:    number;
  relation: string;
}

export interface Request {
  params: Params;
  query:  Query;
}

export interface Params {
}

export interface Query {
  dedupe: string;
}
