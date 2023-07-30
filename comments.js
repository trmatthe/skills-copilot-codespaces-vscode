// create webserver 
// const express = require('express');
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// connect to database
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/comments', {useNewUrlParser: true});

// create schema
// const commentSchema = new mongoose.Schema({
//   name: String,
//   comment: String,
//   date: { type: Date, default: Date.now }
// });

// create model
// const Comment = mongoose.model('Comment', commentSchema);

// create document
// const silence = new Comment({ name: 'Silence', comment: 'Hey there' });
// console.log(silence.name);
// console.log(silence.comment);
// console.log(silence.date);

// save document
// silence.save(function (err, silence) {
//   if (err) return console.error(err);
//   console.log('saved');
// });

// find document
// Comment.find(function (err, comments) {
//   if (err) return console.error(err);
//   console.log(comments);
// })

// find document by name
// Comment.find({ name: 'Silence' }, function (err, comments) {
//   if (err) return console.error(err);
//   console.log(comments);
// })

// find document by id
// Comment.findById('5c9e1d5e3d1d0a3d7c3a2c3f', function (err, comments) {
//   if (err) return console.error(err);
//   console.log(comments);
// })

// delete document
// Comment.deleteOne({ name: 'Silence' }, function (err) {
//   if (err) return console.error(err);
//   console.log('deleted');
// })

// update document
// Comment.updateOne({ name: 'Silence' }, { name: 'Silence2' }, function (err) {
//   if (err) return console.error(err);
//   console.log('updated');
// })

// Path: index.js
// create webserver 
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app