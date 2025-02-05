import mongoose from 'mongoose';


const databaseConnection = () => {
  const DB_URL = "mongodb+srv://ApurvChatur:ApurvChatur@cluster0.ohu59.mongodb.net/";

  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB_URL, { dbName: "TropicWaveApplication" })
    .then(response => {
      console.log(`Great... MongoDB connected on server ${response.connection.host} at ${response.connection.name}`);
    })
    // .catch(error => {
    //   console.log(error)
    // })
}

export default databaseConnection;
