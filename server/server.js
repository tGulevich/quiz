const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require('./routes/auth.routes');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
  // console.log(PORT, );

  try {
    // console.log(config.get('dbUrl'));
    await mongoose.connect(config.get('dbUrl'), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    app.listen(PORT, () => {
      console.log('Server started on port ', PORT);
    });
  } catch (e) {
    console.log(e);

  }
}

start();

console.log('Hello, server!!')