import * as mongoose from 'mongoose';

const CollectionSchema = new mongoose.Schema({
  email: String,
  name: String,
});

export const Collection = mongoose.model('Collection', CollectionSchema);
