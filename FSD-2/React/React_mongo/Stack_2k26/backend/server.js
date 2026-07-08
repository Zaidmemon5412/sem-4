const express = require('express');
const mg = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
mg.connect('mongodb://127.0.0.1:27017/stack1') .then(()=>{console.log("Connection Success")})
const UserSchema = new mg.Schema({  username:String  });

const User = new mg.model('empdata', UserSchema);

app.post('/signup', async (req, res) => {
  try {
    const {username} = req.body;
//console.log('Username is' + req.body.username)

    const newUser = new User({username});
    await newUser.save();
    res.send();
// or res.json({message:'User inserted Successfully'})
  } catch (error) {
    res.send(error);
//or res.json({message:'Error in inserted Record'})
  }
});
app.listen(5000);
