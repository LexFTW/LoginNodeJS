let express = require('express');
const parser = require('body-parser');
const app = express();
const path = require('path');
const engine = require('ejs');

const users = [
  {name : 'amengual', password : '1234'},
  {name : 'duson', password : '1234'},
  {name : 'emieza', password : '1234'}
]

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(parser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

// routes
app.get('/', function(req, res){
  res.render('index');
})

app.post('/', function(req, res){
  console.log('[INFO] - Checking name, wait...')
  for (var i = 0; i < users.length; i++) {
    if(users[i]['name'] == req.body.name && users[i]['password'] == req.body.password){
      console.log("[INFO] - Correct User introduce.");
      res.send('[INFO]. Name: ' + req.body.name + ' => Password: ' + req.body.password);
    }
  }
});

app.listen(app.get('port'), () =>{
  console.log('El puerto escuchado es el: ', app.get('port'));
});
