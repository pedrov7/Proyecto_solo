const ProjectController = require('../controllers/project.controller');

module.exports = function(app){
    app.post('/api/user', ProjectController.createUser);
    app.get('/api/users', ProjectController.getAllUsers);
    app.post('/login', ProjectController.authUser);
}