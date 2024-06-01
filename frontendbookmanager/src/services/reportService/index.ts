import axios from "axios";

export const getReport = async (period: string) => {
  try {
    const resp = await axios.get(
      `http://localhost:5248/api/Report/sales_by_date/${period}`
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
