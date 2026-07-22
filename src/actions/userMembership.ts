"use server";

import axios from "axios";

const API_URL = process.env.APP_URL + "/api/auth/user/membership";

/**
 * Fetch currently logged-in user's membership
 */
export const getCurrentUserMembership = async () => {
  const res = await axios.get(API_URL, {
    withCredentials: true,
  });

  return res.data;
};
/**
 * POST – Create user membership
 */
export const createUserMembership = async (
  membershipId: string,
  durationInDays: number,
) => {
  const res = await axios.post(
    API_URL,
    { membershipId, durationInDays },
    { withCredentials: true },
  );

  return res.data;
};
