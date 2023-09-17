const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Use middlewares
app.use(cors());
app.use(express.json());

app.get('/home', (req, res) => {



    res.json({ message: "Express backend is running!" });
});

app.get('/sign-up', (req, res) => {

    const data_from_front_end = {
        email: "alexarguelles87923@gmail.com",
        password: "test123"
    }

    // Save the info submited

    // return 200

    // if they have invalid email, email exists, invalid password
    // return 401


    res.json({ message: "Express backend is running!" });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
