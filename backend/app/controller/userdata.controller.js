var userService = require('../services/userdata.services');

exports.createUser = (req, res) => {
    req.sanitize('email',).normalizeEmail({ remove_dots: false});

    var errors = req.validationErrors();
    if (errors) { return res.status(400).send(errors);}
    else{
        userService.createUser(req, res);
    }
}