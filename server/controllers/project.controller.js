const {Project} = require('../models/project.model');

module.exports.createUser = (req, res) => {
    const {user, password} = req.body;

    Project.create({
        user,
        password
    })
    // .save()
    .then(res => {
        res.json({msg: "success!", user})
    })
    .catch(err => res.json(err))
}


module.exports.getAllUsers = (req, res) => {
    Project.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

module.exports.authUser = (req, res) => {
    const {user, password} = req.body;
    Project.findOne({user})    
    .then(res => {
        bcrypt.compare(password, res.password)
        .then(isSamePass => {

            if(isSamePass){
                res.json("Authenticated user");
            } else{
                res.json("Invalid password");
            }
        })
       
    })
    .catch(() => res.json("Not a correct user"))
}


