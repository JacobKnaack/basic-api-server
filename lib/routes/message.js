'use strict';

const express = require('express');
const { MessageModel } = require('../model');

const router = express.Router(); // gives us an object to define routing logic

router.get('/message', read);
router.get('/message/:id', read);
router.post('/message', create);
router.patch('/message/:id', update);
router.put('/message/:id', update);
router.delete('/message/:id', remove);

async function read(req, res, next) {
  console.log('Reading from messages');

  let { id } = req.params;
  let messages;
  if (id) {
    messages = await MessageModel.findOne({where: {id}});
  } else {
    messages = await MessageModel.findAll();
  }

  let resObject = {
    count: messages ? messages.length : 1,
    results: messages,
  };
  res.status(200).json(resObject);
}
function create(req, res, next) {
  res.send('working on it');
}
function update(req, res, next) {
  res.send('working on it');
}
function remove(req, res, next) {
  res.send('working on it');
}

module.exports = router;
