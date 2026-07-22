"use server";

import axios from "axios";

const API_URL = `${process.env.APP_URL}/api/auth/courses`;

/* CREATE COURSE*/
export const createCourse = async (data: any) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

/* GET ALL COURSES */
export const getCourses = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

/* GET SINGLE COURSE */
export const getCourseById = async (id: string) => {
  const res = await axios.get(`${API_URL}?id=${id}`);
  return res.data;
};

/*UPDATE COURSE*/
export const updateCourse = async (id: string, data: any) => {
  const res = await axios.put(`${API_URL}?id=${id}`, data);
  return res.data;
};

/*  DELETE COURSE */
export const deleteCourse = async (id: string) => {
  const res = await axios.delete(`${API_URL}?id=${id}`);
  return res.data;
};

/* ADD COURSE REVIEW*/
export const addCourseReview = async (data: {
  courseId: string;
  rating: number;
  reviewText: string;
  reviewerEmail: string;
}) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};
