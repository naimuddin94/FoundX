"use server"; 

import axiosInstance from "@/src/lib/AxiosInstance"; // Importing custom Axios instance for making API requests
import { cookies } from "next/headers"; // Importing cookies from Next.js to set HTTP cookies on the server
import { FieldValues } from "react-hook-form"; // Importing FieldValues type from react-hook-form to type userData

// Function to register a new user with provided user data
export const registerUser = async (userData: FieldValues) => {
  try {
    // Make a POST request to the "/auth/register" endpoint with user data
    const { data } = await axiosInstance.post("/auth/register", userData);

    // If registration is successful, set access and refresh tokens as cookies
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken); // Set access token
      cookies().set("refreshToken", data?.data?.refreshToken); // Set refresh token
    }

    return data; // Return response data
  } catch (error: any) {
    // Catch any error that occurs and throw a new Error with the error message
    throw new Error(error);
  }
};
