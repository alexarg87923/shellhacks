const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Use middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Express backend is running!" });
});

app.get('/sign-up', (req, res) => {
    const data_from_front_end = {
        name: 'alex',
        lastname: 'arguelles',
        email: "alexarguelles87923@gmail.com",
        password: "test123",
        confirm_password: 'test12'
    }

    // if they have invalid email, email exists, invalid password
    // return 401

    // Save the info submited
    // return 200


    res.json({ message: "Express backend is running!" });
});

app.get('/sign-in', (req, res) => {

    const data_from_front_end = {
        email: "alexarguelles87923@gmail.com",
        password: "test123"
    }

    // Call database check if email exists
    // if email doesnt exist give error
    // if email exists, check to see if passwords are the same
    // if password is different throw error
    // if password is the smae as the oen in the db you give a 200

    res.json({ message: "Express backend is running!" });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
