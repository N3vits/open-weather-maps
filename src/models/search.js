import axios from "axios";
import dotenv from "dotenv"
export class Search {
    history = ['Cali', 'Buenos Aires', 'New York'];
    constructor() {
        //TODO: database
    }

    async city(place=''){
        //TODO: http
        console.log('Place: ', place);
        dotenv.config();
        const options = {
            url: `https://open-weather13.p.rapidapi.com/city/${place}`,
            headers: {
              'X-RapidAPI-Key': process.env.KEY,
              'X-RapidAPI-Host': process.env.HOST
            }
          };

        try {
            const response = await axios.request(options);
            console.log(response.data.coord);
        }
        catch(error) {
            throw error;
        }

        return [];
    }
}