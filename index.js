const request = require('request');
const argv = require('yargs').argv;
let apiKey = process.env.MYAPIKEY;
let city = argv.c || 'berlin';
let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url,function(err,response,body){
  if(err){
    console.log(err);
  }
  else{
    let weather = JSON.parse(body);
    let message =  `Its ${weather.main.temp}degrees in ${weather.name} `;
    console.log(message);
  }
});
