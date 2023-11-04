const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_APP_API_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (error) => {
  console.error("Error message::", error);
});

async function mongoConnect() {
  await mongoose.connect(`${MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  mongoConnect,
};
