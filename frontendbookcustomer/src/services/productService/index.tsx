/* eslint-disable no-useless-catch */
import axios from "axios";
import { BASE_URL } from "../signin";

const URL_BASE_CATEGORIES = `${BASE_URL}/categories`;

export const listCategories = async () => {
  try {
    const resp = await axios.get(URL_BASE_CATEGORIES);
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    };
  } catch (error) {
    throw error;
  }
};

export const listProductsByCategory = async ({
  alias,
  pageNum,
  sort,
  keyword,
}: {
  alias: string;
  pageNum: number;
  sort: string;
  keyword: string | undefined;
}) => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/c/${alias}/page/${pageNum}?sort=${sort}${keyword === undefined ? "" : "&keyword=" + keyword}`,
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

export const getProduct = async (alias: string | undefined) => {
  try {
    const resp = await axios.get(`${BASE_URL}/p/${alias}`);
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    };
  } catch (error) {
    throw error;
  }
};
