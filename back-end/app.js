const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Added bcrypt library
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

function validateNameField(name) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePasswordLength(password) {
  return password.length >= 8;
}

app.get('/home', (req, res) => {
  res.json({ message: 'Express backend is running!' });
});

app.post('/register', async (req, res) => {
  try {
    const data_from_front_end = req.body;

    // Validate firstName and lastName fields (only letters allowed)
    if (!validateNameField(data_from_front_end.firstName) || !validateNameField(data_from_front_end.lastName)) {
      throw new Error('First name and last name should only contain letters.');
    }

    // Validate email field
    if (!validateEmail(data_from_front_end.email)) {
      throw new Error('Invalid email format. Please double-check');
    }

    // Validate password length
    if (!validatePasswordLength(data_from_front_end.password)) {
      throw new Error('Password should be at least 8 characters long.');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data_from_front_end.password, 10); // 10 is the number of salt rounds

    const newUser = new User({
      firstName: data_from_front_end.firstName,
      lastName: data_from_front_end.lastName,
      email: data_from_front_end.email,
      password: hashedPassword, // Store the hashed password
    });

    await newUser.save();

    res.status(200).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message || 'Registration failed.' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found. Please check your email.');
    }

    // Compare the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password. Please try again.');
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message || 'Login failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
