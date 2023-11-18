import { seeHistory } from "../db/queries.js";
import { input, menu, pause } from "./helpers/inquirer.js";
import { Search } from "./models/search.js";

const main = async () => {
  let opt;
  const search = new Search();
  console.log(opt);
  let id;
  do {
    opt = await menu();
    switch (opt) {
      case 1:
        //Input message
        const place = await input("City: ");

        //City data
        const data = await search.city(place);
        id = data.id;
        console.log(data.id);
        //Information
        console.log("\nCity information".rainbow);
        console.log("City: ", data.name);
        console.log("Lat: ", data.coord.lat);
        console.log("Lng: ", data.coord.lon);
        console.log("Min: ", data.main.temp_min);
        console.log("Max: ", data.main.temp_max);
        break;
      case 2:
        const history = await seeHistory();
        history.map((e) => {
          console.log({
            id: e.id,
            name: e.name,
          });
        });
    }
    await pause();
  } while (opt != 0);
};

main();
