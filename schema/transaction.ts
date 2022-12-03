import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ICountry{
    country: String;
    state: String;
    time: Number;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const IngressSchema = new Schema<ICountry>({
    country: { type: String, required: true },
    state: { type: String, required: true },
    time: Number,
  });
  
  // 3. Create a Model.
  const transaction = model<ICountry>('transaction', IngressSchema);

  module.exports = { transaction }