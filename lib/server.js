'use strict';

const express = require('express');
const app = express();
const messageRoutes = require('./routes/message.js');

app.use(express.json());
app.use(messageRoutes);

// app.get('/message'); // returns all messages
// app.get('/message/:id'); // returns only messages that match an id.
// app.post('/message'); // creating a new message
// app.put('/message/:id'); // update an existing message
// app.patch('/message/:id'); // update an existing message
// app.delete('/message/:id'); // remove and existing message

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  },
  app,
};
