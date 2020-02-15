const Users = require("../models/users");
const express = require('express');
const router = express.Router();



//LOGIN -> POST por tema de fetch

router.post("/api/users/login", (req, res) => {

    Users.find(
        { $and: [{ "email": req.body.email }, { "password": req.body.password }] },
        (err, data) => {
            if (data.length !== 0) {
                res.status(200).send({
                    succes: "true",
                    message: "User encontrado",
                    user: data
                })
            } else {
                res.status(401).send({
                    succes: "false",
                    message: "User y/o password no encontrados",
                })
            }
        }
    )
});

// REGISTRO -> POST

router.post("/api/users/register", (req, res) => {

    if (req.body.name !== "" && req.body.email !== "" && req.body.password !== "" && req.body.age !== "") {
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age
        })

        user.save((err, data) => {
            if (err) {
                throw error
            } else {
                res.status(200).send({
                    success: "true",
                    message: "User added",
                    user
                })
            }

        })
    } else {
        res.status(400).send({
            success: "false",
            message: "All fields are required",
            user: data
        })
    }
});

//DELETE

router.delete("/api/users/deleteUser/:id", (req, res) => {
    Users.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(400).send({
                success: "false",
                message: ""
            })
        }
        res.status(200).send({
            success: "true",
            message: "User deleted",
            user: data
        })
    })
});

//PUT 

router.put("/api/users/:id", (req, res) => {
    Users.findById(req.params.id, (err, data) => {
        if (!err) {

            data.name = req.body.name ? req.body.name : data.name;
            data.email = req.body.email ? req.body.email : data.email;
            data.password = req.body.password ? req.body.password : data.password;
            data.age = req.body.age ? req.body.age : data.age;

            data.save((err) => {
                if (!err) {
                    res.status(201).send({
                        success: 'true',
                        message: 'User modified',
                        user: data
                    });
                } else {
                    throw err;
                }
            });
        }
    })

});


module.exports = router;
