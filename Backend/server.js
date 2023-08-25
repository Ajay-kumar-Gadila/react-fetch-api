// mongoose.connect('mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/React_Signup', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// middleware 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/React_Signup', ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
}))
.then(() => console.log("Data base connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
}) 

const User = mongoose.model('User',userSchema);

// middleware
app.use(express.json());
app.use(cors());

app.post('/api/create', (req,res) =>{
  const {name , email , password } =req.body;
  const newUser = new User({name, email,password});
  newUser.save()
  .then((user) => {
          console.log('New user registered:', user);
          res.status(201).json(user);
        })
        .catch((error) => {
          console.error('Error while saving user:', error);
          res.status(500).json({ error: 'Failed to register user.' });
        });
});

app.listen(3001,() =>{
  console.log("server is listening on 3001 ")
})




