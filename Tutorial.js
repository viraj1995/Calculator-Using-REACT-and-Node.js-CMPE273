var http = require('http');
var fs = require('fs');



/*
Watch the videos after that.

Video 26: Part 2 of the Template Engine. - Watch the video again.
NetNinja Node.js video 26 - Search Youtube.
Advanced things you can do.
<ul>
<% data.hobbies.forEach(function(item){%>
    <% });>
})
*/
/*
Video 25 : Template Engines: So far have just used text page.
EJS - Template engine. What if you want to inject data into the html file you want to output.
Template engines are used for that.
Step 1: Install EJS - It's a package.
npm install ejs -g (for global or don't use -g)

Use the variable app and then using set variable.

app.set('view engine', 'ejs'); (It can also be called view engine)

Create a folder named views. Create a template file called view.ejs (ejs extension is the template extension.)
Now you can embed javascript data into it.
How to render this view when the user goes to a particular route.:

res.render('profile');

Now if you want to inject some dynamic data into it,

res.render('profile', {person: req.params.id (or name)});

Now in the ejs file, in h1 tag, 
Welcome to the profile of <%=person%>.

If you want to pass more data into the view,

app.get('/profile/:name', function(req,res){
    var data = {age:29, job: 'ninja'};
    res.render('profile, {person: req.params.name, data: data});
})


Now in the HTML File, 
Age: <%=data.age%>
Job: <%=data.job%>.
This is how easily you can dynamically inject data after taking from databases.
This will inject the data from the url and passed into the view and then given the output in the html format.




How to send an html page:

var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res,){
res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
    res.send('This is the contact page');
});

app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of' + req.params.id);
}
app.listen(3000);



*/
/*
Video 24: Route Parameters.
What is it? In video 23, we're just responding to static requests like
/contact, /, etc. What if you need a dynamic request like a social network site.
One particular route would be /profile/id of that profile. Now you wouldn't want to set the paths 
for each and every profile's id. So for that, route parameters are used.
So you would want to recognize when someone is requesting for a page and then grab the id from the url, so that you can do something with it.

req.params will check the :id and req.params.id will redirect to the id.
**************************************
var express = require('express');
var app = express();

app.get('/', function(req, res,){
res.send('This is the homepage');
});
app.get('/contact', function(req, res){
    res.send('This is the contact page');
});

app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of' + req.params.id);
}
app.listen(3000);

***************************************

/*
Video 23:
Express:
Easy and flexible routing system.
Integrates with many templating engines really easily which is great when crafting front-end applications.
Contains a middleware framework
npm install express
npm uninstall express
-save : Used to add it to the package.json as a dependancy.
npm install nodemon
nodemon app.js

HTTP Methods : Kind of requests that we make.
GET, POST, DELETE, PUT.

Responding to requests using express.
GET - app.get('route', fn)
POST - app.post('route', fn)
DELETE - app.delete('route', fn)

****************************

var express = require('express');
var app = express();

app.get('/', function(req, res,){
res.send('This is the homepage');
});
app.get('/contact', function(req, res){
    res.send('This is the contact page');
});
app.listen(3000);


****************************
Video 22: 
NodeMON is a package - Refreshing the browser automatically shows the changes.
npm install -g nodemon
-g means we can use it globally - No matter what application.
So that you can use it in every application in the computer.
-g will install it somewhere else not in the same directory.
To start the server using NodeMon type, nodemon app.js
(So basically what happens while working in REACT)



Video 19 - Routing
var server = http.createServer(function (req, res){
    console.log('A request was made: ' req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
 server.listen(3000, '127.0.0.1');
Here, if it is /home it will load the index.html file. If not, it will keep on loading.(while searching for the path.)

Add the else if loop for different addresses to route.

at the end in "else" you can send the code 404.

eg: else if(req.url === '/api/ninjas'){
    var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(ninjas));
}


*/
/*
Video 18 - Serving JSON data to clients.
Why would someone need JSON?
Imagine you have JS running in the front end, it might make a request.
So that it can output the JSON data into the browser if it is needed for something.


First change the content type to application/json.

var myObj = {
    name: 'Viraj',
    Age: '22',
    job: 'Student'
};
res.end(JSON.stringify(myObj));



*/
/*
Video 17 - Serving HTML Pages.
Just change 'Content-Type': 'text/html' (from text/plain)
and the file name after __dirname.
*/
/*
Video 16 - Piping.
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); 
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.pipe(myWriteStream);
*/


/*
Pipes - Takes the stream and instead of manually listening to it, pipe automatically does that for us.
So using pipes, we don't have to manually listen for data events and don't have to manually write.
//Video 15- Writing stream. Difference between readFile, writeFile and readStream, writeStream is that we're cutting the data into chunks stored in a temporary buffer while using streams.
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); //utf8 = text. Otherwise buffer will show binary.
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
myReadStream.on('data', function(chunk){ 
    console.log('new chunk received:');
    console.log(chunk);
    myWriteStream.write(chunk);
})
*/

/*
//Reading streams - Video 14 - Net Ninja
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); //utf8 = text. Otherwise buffer will show binary.

myReadStream.on('data', function(chunk){ //.on is a part of EventEmitter.
    console.log('new chunk received:');
    console.log(chunk);
})
*/

/* - Video 12 - Net Ninja
//Creating a Server here and listening on the specific ip and port:
var server = http.createServer(function (req, res){
    console.log('A request was made: ' req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');


Video 16 - Better option than video 12.

var server = http.createServer(function (req, res){
    console.log('A request was made: ' req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
  myReadStream.pipe(res);
  // this is not needed now--> res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');
*/
