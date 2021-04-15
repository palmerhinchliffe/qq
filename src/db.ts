const mongoose = require('mongoose')

const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB = process.env.MONGO_HOSTNAME

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000
}

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options)
  .then(() => console.log('Database is connected'))
  .catch((error: any) => console.log(error))
