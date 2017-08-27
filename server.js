var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    
    'article-one' : {
        title: 'Article one | sanjana',
        heading: 'ARTICLE ONE',
        date: '27th august 2017',
        content: `<p>
                        This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one.
                    </p>
                    <p>
                        This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one.
                    </p>
                    <p>
                        This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one. This is my article one.
                    </p>`
    },
    'article-two' : {
        title: 'Article two | sanjana',
        heading: 'ARTICLE TWO',
        date: '27th august 2017',
        content: `<p>
                        This is my article two. 
                    </p>`},
    'article-three' :{
        title: 'Article three | sanjana',
        heading: 'ARTICLE THREE',
        date: '27th august 2017',
        content: `<p>
                        This is my article three.
                    </p>`}
};

function createtemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate= `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width , initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
       
        <body>
            <div class="container">
                <div>
                    
                    <a href="/">
                      home
                    </a>
                </div>
                <div>
                    <h3>
                       ${heading}
                    </h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res)
{
    var articlename=req.params.articlename;
   res.send(createtemplate(articles[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
