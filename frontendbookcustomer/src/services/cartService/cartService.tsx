/* eslint-disable no-useless-catch */
import { checkoutInfo } from "@/types/cart";
import instanceAxios, { BASE_URL_AUTH } from "../accessToken";

const URL_ADD_PRODUCT_TO_CART = `${BASE_URL_AUTH}/cart/add`;
const URL_CART = `${BASE_URL_AUTH}/cart`;
const URL_CHECKOUT = `${BASE_URL_AUTH}/checkout`;

export const addToCart = async ({
  productId,
  customerId,
  quantity,
}: {
  productId: number;
  customerId: number;
  quantity: number;
}) => {
  try {
    const resp = await instanceAxios.post(
      `${URL_ADD_PRODUCT_TO_CART}/${productId}/${customerId}/${quantity}`,
    );
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    };
  } catch (error) {
    throw error;
  }
};

export const getCart = async (customerId: number) => {
  try {
    const resp = await instanceAxios.get(`${URL_CART}/${customerId}`);
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    };
  } catch (error) {
    throw error;
  }
};

export const deleteCart = async ({
  productId,
  customerId,
}: {
  productId: number;
  customerId: number;
}) => {
  try {
    const resp = await instanceAxios.delete(
      `${URL_CART}/remove/${productId}/${customerId}`,
    );
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    };
  } catch (error) {
    throw error;
  }
};

export const checkout = async ({
  data,
  customerId,
}: {
  data: checkoutInfo;
  customerId: number;
}) => {
  try {
    const resp = await instanceAxios.post(
      `${URL_CHECKOUT}/${customerId}`,
      data,
    );
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    };
  } catch (error) {
    throw error;
  }
};
