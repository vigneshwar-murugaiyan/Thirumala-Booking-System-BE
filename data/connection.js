import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const dburl = "mongodb+srv://senthilvelan:senthil@cluster0.aks8fzv.mongodb.net/temple?retryWrites=true&w=majority";

const connect = function() {
  mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
    .then((val) => {
      console.log("The database is connected");
    }).catch((err) => {
      console.log(err);
    })
}

export default connect;
