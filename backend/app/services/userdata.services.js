var userModel = require('../model/userdata.model');

exports.createUser = async (req, res) => {
    console.log(req.body.name);
    var userExist = await userModel.findOne({
        email : req.body.email
    })

    if(!userExist) {
        let createUser = new userModel({
            name : req.body.name,
            email : req.body.email,
            DOB : req.body.DOB,
            Age : req.body.Age
        });

        let userResponse = await userModel.create(createUser);
        res.send({
            status : userResponse.name + "registered"
        });
    }
    else {
        res.send({
            msg : "Email is already registered"
        })
    }
}


