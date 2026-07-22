"use server";

import axios from "axios";

const API_URL = `${process.env.APP_URL}/api/auth/events`;

/*CREATE EVENT*/
export const createEvent = async (data: any) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

/* GET ALL EVENTS */
export const getEvents = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

/* GET SINGLE EVENT */
export const getEventById = async (id: string) => {
  const res = await axios.get(`${API_URL}?id=${id}`);
  return res.data;
};

/* UPDATE EVENT*/
export const updateEvent = async (id: string, data: any) => {
  const res = await axios.put(`${API_URL}?id=${id}`, data);
  return res.data;
};

/* DELETE EVENT*/
export const deleteEvent = async (id: string) => {
  const res = await axios.delete(`${API_URL}?id=${id}`);
  return res.data;
};

/* ADD REVIEW */
export const addEventReview = async (data: {
  eventId: string;
  rating: number;
  reviewText: string;
  reviewerEmail: string;
}) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};
