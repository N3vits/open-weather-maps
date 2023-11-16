import { input, menu, pause } from "./helpers/inquirer.js"
import { Search } from "./models/search.js";



const main = async () => {
    let opt;
    const search = new Search();
    console.log(opt);
    do {
        opt = await menu();
        switch(opt){
            case 1: 
            //Input message 
            const place = await input('City: ');
            await search.city( place );   
            console.log('\nCity information'.rainbow);
            console.log('City: ', place);
            console.log('Lat: ', );
            console.log('Lng: ', );
            console.log('Min: ', );
            console.log('Max: ', );
            break;
        }
        await pause();
    } while (opt != 0)

}

main();