


class NewsController { 
    index(req, res){ 
        res.render('news'); 
    }  

    show(req, res){ 
        res.send(`News is here`); 
    }  
} 

// app.get('/news', (req, res) => {  
//       res.render('news');  
//     }) 

module.exports = new NewsController; 


// const NewsController = require('./NewsController'); 
