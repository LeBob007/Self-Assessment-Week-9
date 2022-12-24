const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find().then(arr => res.status(200).send(arr)).catch(err => res.sendStatus(500))
};

exports.add = (req, res) => {
  // your code here
  Attendee.create(req.body).then(_ => res.sendStatus(201)).catch(err => res.sendStatus(500))
};

exports.remove = (req, res) => {
  Attendee.deleteOne(req.body).then(_ => res.sendStatus(204)).catch(err => res.sendStatus(500))
};
