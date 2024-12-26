const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/register')
  .then(() => console.log('Connected!'));