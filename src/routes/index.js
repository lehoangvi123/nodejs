const newsRouter = require('./news'); 
const siteRouter = require('./site');


function route(app) { 
    

// app.get('/news', (req, res) => {  
//   res.render('news');  
// })  

app.use('/news', newsRouter);  // Register newsRouter middleware at '/news' path.  // Middleware function is a function that runs before the route handler function. It can be used to validate input, log requests, or perform other operations.  // app.use() is a middleware function that applies to all routes defined after it. It does not stop the execution of the route handler function.  // app.use() is used to mount middleware functions at specific paths.
app.use('/', siteRouter);   


app.get('/about', (req, res) => {  
  res.render('about');  
})    

// Action -- Dispatcher --> Function handler

// Route
app.get('/settings', (req, res) => {  
  res.render('settings');  
  // 'setting' is the Controller  
  // views 
  // res: respond to web server to brwoser
}) 
app.get('/services', (req, res) => { 
  res.render('services'); 
}) 

app.get('/contact', (req, res) => {  
  res.render('contact'); 
})  


// How to take the data from database 
// query


app.post('/search', (req, res) =>{  
  // Controller
   console.log(req.body);  // { q: 'f8 lap trinh', ref: 'website', author: 'lehoangvi' }
  res.render('search');
}); 

}

// Export route function
module.exports = route;
