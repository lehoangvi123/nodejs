const express = require('express') 
// express library   
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000; 
const path = require('path');  
const route = require('./routes');

// meet the path, test the folder  
// Middleware to parse URL-encoded from data
app.use(express.static(path.join(__dirname, 'public')));  
// localhost = hosting
// host: storage 
// local: in local place, not outside. 
app.use(express.urlencoded({extended: true})) 
app.use(express.json()); 

// XMLHTTP request, fetch, axios

// Route init
route(app); 
// template engine  
app.engine('hbs', handlebars.engine({
  extnameL : '.hbs',
})); 
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'resource/views') )

console.log(__dirname); 
// route

// Query parameter 
// http://localhost:3000/search?q=f8%20lap%20trinh&ref=website&author=lehoangvi


// app.get('/examples', (request, response) => { 
  // res.render('examples');
// });

// Basic routing  

// Home, search, contact. 


app.listen(port, () => {  
  console.log(`Example app listening on port https://localhost:${port}`)
}) 






