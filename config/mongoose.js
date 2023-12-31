//this file is used to set connection with the database
const mongoose= require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//name of the db is products-api
mongoose.connect('mongodb+srv://kumarakashsahu98765:Z9k1LAjqEUABbM9h@cluster0.n3jvdp7.mongodb.net/HospitalAPI');

const db=mongoose.connection;
//for error
 db.on('error', console.error.bind(console,"ERROR CONNECTING TO DATABASE!!"));

 //on success
 db.once('open', ()=>{
     console.log("Conncted to database");
 });

 module.exports=db;
 