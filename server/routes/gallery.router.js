const { Router } = require('express');
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  const sqlText = `UPDATE "gallery" SET "likes" = likes +1 WHERE id = $1;`
  pool.query(sqlText, [galleryId])
  .then(result => {
    console.log('updated', result);
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('Unable to update', err);
    res.sendStatus(500);
  })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "gallery" ORDER BY "id";`;
  pool.query(sqlText)
  .then(result => {
    console.log('Get gallery from DB', result);
    res.send(result.rows);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
  let newPicture = req.body;
  console.log(newPicture);
  const sqlText = `
  INSERT INTO "gallery" (path, description, likes)
    VALUES ($1, $2, 0);
  `;
  pool.query(sqlText, [newPicture.path, newPicture.description])
  .then(result =>{
    console.log('Picture added', result);
    res.sendStatus(201);
  })
  .catch(err => {
    console.log('Unable to add picture', err);
    res.sendStatus(500);
  })
}) // end POST route

// DELETE Route
router.delete('/:id', (req, res) => {
  let pictureId = req.params.id;
  console.log('Delete picture', pictureId);
  const sqlText=`DELETE FROM "gallery" WHERE id = $1;`;
  pool.query(sqlText, [pictureId])
  .then(result => {
    console.log('Picture deleted');
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('Unable to delete picture',err);
    res.sendStatus(500);
  })
}) // end DELETE route

module.exports = router;