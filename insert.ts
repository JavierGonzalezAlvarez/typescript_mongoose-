import { connectDB } from "./db/server";
connectDB()

const { transaction } = require('./schema/transaction');
transaction()
 
async function run() {
    const new_country = new transaction({
        country: 'Spain',
        state: 'AL',
        time: 1663944477875,
    });
    await new_country.save()
        .then(()=> {
            console.log("ok record: ", new_country.state);
        })
}

run()


