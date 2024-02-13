const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:nynddRW7OlHCETM6@cluster0.ppvdeo8.mongodb.net/Movie_app?retryWrites=true&w=majority").
    then(() => {
        console.log('DB is connected...!');
    }).catch((err) => {
        console.log('DB connection failed...#', err);
    })