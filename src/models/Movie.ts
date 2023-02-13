import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String },
    rating: { type: Number },
    description: { type: String },
    director: { type: String },
    stars: { type: String },
    poster: { type: String },
  },
  {
    timestamps: true,
  }
);

export const MovieModel = model("Movie", movieSchema);
