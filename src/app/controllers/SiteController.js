


class SiteController { 
    home(req, res){ 
        res.render('home'); 
    }  

    search(req, res){ 
        res.send(`News is here`); 
    }  
} 

// app.get('/news', (req, res) => {  
//       res.render('news');  
//     }) 

module.exports = new SiteController; 


// const NewsController = require('./NewsController'); 
