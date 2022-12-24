const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find().then(arr => res.status(200).send(arr)).catch(err => res.sendStatus(500))
};

exports.add = (req, res) => {
  // your code here
  Attendee.create(req.body).then(arr => res.status(201).send(arr)).catch(err => res.sendStatus(500))
};
