import instanceAxios, { BASE_URL_AUTH } from "../accessToken";
const URL_ORDERS: string = `${BASE_URL_AUTH}/orders`;

export const listOrders = async (
  pageNumber: number = 1,
  sort: string = "asc",
  keyword: string | undefined
) => {
  try {
    const resp = await instanceAxios.get(
      `${URL_ORDERS}/page/${pageNumber}?sort=${sort}${
        keyword === undefined ? "" : "&keyword=" + keyword
      }`
    );
    return {
      status: resp?.status,
      statusText: resp?.statusText,
      data: resp?.data,
    };
  } catch (error) {
    throw error;
  }
};

export const deleteOrder = async (id: number) => {
  try {
    const resp = await instanceAxios.delete(`${URL_ORDERS}/${id}`);
    return {
      status: resp?.status,
      statusText: resp?.statusText,
      data: resp?.data,
    };
  } catch (error) {
    throw error;
  }
};
