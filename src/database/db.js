const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://soaidv:30092001ss@cluster0.jxk4vaq.mongodb.net/?retryWrites=true&w=majority";

let client;

const getDB = () => {
  if (!client) {
    console.log("Creating a new client!");
    client = new MongoClient(uri);
  } else {
    console.log("Reusing the old client");
  }

  const database = client.db("test");
  const products = database.collection("products");
  const orders = database.collection("orders");

  return {
    products,
    orders,
  };
};

module.exports = getDB;
