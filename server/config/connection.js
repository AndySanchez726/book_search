const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://andysanchez:s400a863@book-search.xbvzd.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
