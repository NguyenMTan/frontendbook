/* eslint-disable no-useless-catch */
import instanceAxios, { BASE_URL_AUTH } from "../accessToken";

const URL_ORDER = `${BASE_URL_AUTH}/order`;

export const getOrder = async (customerId: number) => {
  try {
    const resp = await instanceAxios.get(`${URL_ORDER}/${customerId}`);
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    };
  } catch (error) {
    throw error;
  }
};
