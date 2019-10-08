const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('car-dealer')
      .then(cars => {
          res.json(cars);
      })
      .catch(err => {
          res.status(500).json({ message: 'Failed to retrieve cars from database'});
      });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('car-dealer').where({ id }).first()
      .then(car => {
          res.json(car);
      })
      .catch(err => {
          res.status(500).json({ message: 'Failed to retrive car info from the database'});
      });
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('car-dealer').insert(carData)
      .then(ids => {
          db('car-dealer').where({ id: ids[0] })
            .then(newCar => {
                res.status(201).json(newCar);
            });
      })
      .catch(err => {
          res.status(500).json({ message: 'Failed to add car info to database'});
      });
});

module.exports = router;