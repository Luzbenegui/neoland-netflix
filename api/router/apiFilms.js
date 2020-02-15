const Films = require("../models/films");
const express = require('express');
const router = express.Router();



router.get('/api/films', function (req, res) {
  Films.find((err, data) => {
    if (err) {
      console.log('ERROR someting is wronggggg!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: Films',
        films: data
      });
    }
  });
});
//POST films
router.post('/api/films', function (req, res) {
  const { name, year, type, director, age, rate, time } = req.body;
  const film = new Films({
    name: name,
    year: year,
    director: director,
    time: time,
    type: type,
    age: age,
    rate: rate
  });

  film.save((err, data) => {
    if (err) {
      console.log('ERROR someting is wronggg!')
    } else {
      res.status(201).send({
        succes: 'true',
        message: 'POST: films',
        film
      });
    }
  });
});

// Get ONE
router.get('/api/films/:id', function (req, res) {
  Films.findById((req.params.id), (err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: Films',
        films: data
      });
    }
  });
});

//Get filtrado por nombre pelicula
router.get('/api/film/:name', (req, res) => {
  const { name, year, type, director, age, rate, time } = req.body;
  Films.find({ name: name }, (err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!');
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: Films',
        films: data
      })
    }
  });

});


module.exports = router;