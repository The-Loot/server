const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ErrorWithHTTPStatus = require('../utils/error.HttpStatus.utils');

const login = async (request, response, next) => {
  try {
    const user = await User.findOne({ username: request.body.username });
    if (!user) throw new ErrorWithHTTPStatus('User does not exist', 404);
    const isMatched = await bcrypt.compare(request.body.password, user.password);
    if (!isMatched) throw new ErrorWithHTTPStatus('Invalid Login Credentials', 401);

    const token = jwt.sign(user.username, process.env.JWT_SECRET);

    response.send({ message: 'Logged in!', token });
  } catch (error) {
    console.error(next);
    next(error);
  }
};

const signup = async (request, response, next) => {
  try {
    // hash the password
    const hashedPassword = await bcrypt.hash(request.body.password, 6);
    const userInfo = new User({
      username: request.body.username,
      password: hashedPassword,
    });
    await User.create(userInfo);
    response.status(201).send('Signed up!');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  signup,
  login,
};
