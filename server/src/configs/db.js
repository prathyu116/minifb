import mongoose from "mongoose";

const connect = async () => {
  return mongoose.connect("mongodb+srv://prathyu:TBfblSMn8rJbyos@cluster0.ncvfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

export { connect}
