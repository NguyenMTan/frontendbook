export interface product {
  id: number;
  name: string;
  alias: string;
  mainImage: string;
  shortDescription: string;
  fullDescription: string;
  cost: number;
  price: number;
  sale: number;
  enabled: number;
  authorId: number;
  categoryId: number;
  productImages: images[];
  productDetails: details[];
}

export interface images {
  id: number;
  name: string;
  productId: number;
}

export interface details {
  id: number;
  name: string;
  value: string;
  productId: number;
}
