const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connection established'))
    .catch(err => console.log('There is an error ', err))
    