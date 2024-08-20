export interface IItem {
  name: string;
  description: string;
  price: number;
  total: number;
  left: number;
  rating: number;
  discount: number;
  image: string;
  nutrients: Array<string>;
  id: string;
}
export interface IItemsApiParams {
  filter?: string;
  sort?: string;
}
