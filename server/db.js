const mongoose = require('mongoose');

//DB Connection
getConnection = async () => {
    try {
      await mongoose.connect(
        'mongodb://mongo:27017/docker-mongo',
        { useNewUrlParser: true }
      );
      console.log('Connection to DB Successful :)');
    } catch (err) {
      console.log('Connection to DB Failed');
      console.log(err);
    }
};
module.exports = getConnection;
  