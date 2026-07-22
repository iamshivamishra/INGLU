import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const optionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const questionSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: [optionSchema],
    validate: [
      (arr: string | any[]) => arr.length === 4,
      "Exactly 4 options required",
    ],
  },
  answer: {
    type: String,
    required: true,
  },
});

const questionPaperSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    questions: [questionSchema],
  },
  { timestamps: true },
);

export const QuestionPaper =
  models.QuestionPaper || model("QuestionPaper", questionPaperSchema);
