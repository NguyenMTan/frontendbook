export interface cart {
  id: number;
  quantity: number;
  product: cartProduct;
}

export interface cartProduct {
  id: number;
  price: number;
  name: string;
  mainImage: string;
}

export interface checkoutInfo {
  name: string;
  address: string;
  phone_number: string;
  payment: string;
}
