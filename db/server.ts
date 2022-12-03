const mongoose = require('mongoose');

export const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/test',
    {
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });
}

