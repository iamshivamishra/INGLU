"use server";

import axios from "axios";

const API_URL = process.env.APP_URL + "/api/auth/memberships";

/**
 * Fetch all membership plans
 */
export const getMemberships = async () => {
  const res = await axios.get(API_URL, {
    withCredentials: true,
  });

  return res.data;
};
