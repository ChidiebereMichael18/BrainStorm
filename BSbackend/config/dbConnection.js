const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://roycoadmin:HiIR1jDAxDc8gjZK@royco.kvyjxpz.mongodb.net/roycodb?retryWrites=true&w=majority&appName=Royco', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    console.log('connection failed...')
    process.exit(1);
  }
};

module.exports = connectDb;