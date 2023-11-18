import axios from "axios";
import dotenv from "dotenv";
import { city } from "../../db/queries.js";
export class Search {
  constructor() {}

  async city(place = "") {
    console.log("Place: ", place);
    dotenv.config();
    const options = {
      url: `https://open-weather13.p.rapidapi.com/city/${place}`,
      headers: {
        "X-RapidAPI-Key": process.env.KEY,
        "X-RapidAPI-Host": process.env.HOST,
      },
    };

    try {
      const response = await axios.request(options);
      await city(response.data.name);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
