const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');


const app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getFamilyByGender);
app.get('/api/restaurants', mainCtrl.getRestaurants);
app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName);

app.put('/api/name', mainCtrl.changeName);
app.put('/api/location', mainCtrl.changeLocation);

app.post('/api/hobbies', mainCtrl.addToHobbies);
app.post('/api/occupations', mainCtrl.addToOccupations);
app.post('/api/family', mainCtrl.addToFamily);
app.post('/api/restaurants', mainCtrl.addToRestaurants);

const port=3000;
app.listen(port, ()=>console.log(`NSA is listening on port ${port}.`));
