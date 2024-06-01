/* eslint-disable no-useless-catch */
import {
  accountRequest,
  loginRequest,
  registerRequest,
} from "@/types/accountRequest";
import axios from "axios";
export const BASE_URL = "http://localhost:5248";

const BASE_URL_UPDATEACCOUNT = `${BASE_URL}/api/auth/customers`;
const BASE_URL_REGISTER = `${BASE_URL}/register`;
const BASE_URL_LOGIN = `${BASE_URL}/login`;
const BASE_URL_LOGIN_GOOGLE: string = `${BASE_URL}/login-google`;
const BASE_URL_LOGIN_FACEBOOK: string = `${BASE_URL}/login-facebook`;

export const loginGoogle = async (access_token: string) => {
  try {
    const resp = await axios.post(
      `${BASE_URL_LOGIN_GOOGLE}?accessToken=${access_token}`,
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

export const loginFacebook = async (access_token: string) => {
  try {
    const resp = await axios.post(
      `${BASE_URL_LOGIN_FACEBOOK}?accessToken=${access_token}`,
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

export const loginCustomer = async (data: loginRequest) => {
  try {
    const resp = await axios.post(BASE_URL_LOGIN, data);
    return {
      status: resp?.status,
      statusText: resp?.statusText,
      data: resp?.data,
    };
  } catch (error) {
    throw error;
  }
};

export const registerCustomer = async (data: registerRequest) => {
  try {
    const resp = await axios.post(BASE_URL_REGISTER, data);
    return {
      status: resp?.status,
      statusText: resp?.statusText,
      data: resp?.data,
    };
  } catch (error) {
    throw error;
  }
};

export const updateCustomer = async ({
  data,
  image,
  id,
}: {
  data: accountRequest;
  image: File | undefined;
  id: number;
}) => {
  const formdata = new FormData();
  const json = JSON.stringify(data);
  formdata.append("data", json);
  if (image) {
    formdata.append("image", image);
  }

  try {
    const resp = await axios.put(`${BASE_URL_UPDATEACCOUNT}/${id}`, formdata);
    return {
      status: resp?.status,
      statusText: resp?.statusText,
      data: resp?.data,
    };
  } catch (error) {
    throw error;
  }
};
