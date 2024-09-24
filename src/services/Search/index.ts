"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const searchItems = async (searchTerm: string) => {
  try {
    const res = await axiosInstance.get(
      `search-items?searchTerm=${searchTerm}`
    );

    return res.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
