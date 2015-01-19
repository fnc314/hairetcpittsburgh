'use strict';

// URLs for entire app, to keep things clean

module.exports = {
  
  'HEROKU' : {
    'BASE_ROUTE' : 'https://hairetcapp.herokuapp.com/api/website/',
    'STYLISTS' : 'https://hairetcapp.herokuapp.com/api/website/stylists/all.json',
    'IMAGES' : 'https://hairetcapp.herokuapp.com/api/website/images/workSampes.json',
    'MAILER' : 'https://hairetcapp.herokuapp.com/api/website/mailer.json'
  },
  
  'LOCAL_DATA' : {
    'HOME' : 'data/homePageInfo.json'.
    'OFFERINGS' : 'data/offerings.json'
  },
  
  'LOCALHOST' : {
    'BASE_ROUTE' : 'http://localhost:3000/api/website/',
    'STYLISTS' : 'http://localhost:3000/api/website/stylists/all.json',
    'IMAGES' : 'http://localhost:3000/api/website/images/workSampes.json',
    'MAILER' : 'http://localhost:3000/api/website/mailer.json'
  }
  
};