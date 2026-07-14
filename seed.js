require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");
const products = require("./data/products");


mongoose
.connect(process.env.MONGO_URI)
.then(async()=>{

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Database Seeded");

    mongoose.connection.close();

})
.catch((error)=>{
    console.log(error);
});
