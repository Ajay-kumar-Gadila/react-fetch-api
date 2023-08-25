// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the cors package

// const app = express();
// const port = 5000; // You can change this port if needed

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/React_Signup', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.use(express.json());

// // Add the CORS middleware
// app.use(cors());

// // API endpoint for user registration
// app.post('/api/users', (req, res) => {
//   const { name, email, password } = req.body;
//   // Add more validation and error handling here if needed

//   const newUser = new User({ name, email, password });
//   newUser.save()
//     .then((user) => {
//       console.log('New user registered:', user);
//       res.status(201).json(user);
//     })
//     .catch((error) => {
//       console.error('Error while saving user:', error);
//       res.status(500).json({ error: 'Failed to register user.' });
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
