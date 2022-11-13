const express = require('express');
const TeamModel = require('../models/team');
const _ = require('lodash');
const mongoose = require('mongoose');

const DB_USER = 'u3r7nzd7eufbzxjivv8s';
const DB_PASSWORD = '3CVg9XH4Efhd6kVTVk3p';
const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@bv5orikrkl5cltl-mongodb.services.clever-cloud.com:27017/bv5orikrkl5cltl`;

const router = express.Router();
const server = express();

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.once('open', () => {
    console.log('we are connected');
});

router.get('/teams', (req, res) => {
    TeamModel.find((err, teams) => {
        if(err) res.status(500).send(err);
        res.json(teams);
    });
    //res.render('index.html', {test: 'Rafael Oliveira'});
});

router.get('/team/:id', (req, res) => {
    const id = req.params.id;
    TeamModel.findById(id, function(err, team)
    {
        if(team)
        {
            res.json(team);
        }
        else
        {
            res.send(`User ${req.params.id} not found`);
        }
    });
});

router.post('/team', (req, res) => {
    const id = new mongoose.Types.ObjectId();
    
    const teamToPersist = Object.assign({ 
        _id: id 
    }, req.body);
    
    const team = new TeamModel(teamToPersist);
    
    team.save().then((cb) => {
        if(cb.errors)
        {
            res.status(500).send(err);
        }
        else
        {
            res.json(team);
        }
    })
});

router.put('/team', (req, res) => {
    console.log("handling PUT request...");
    res.end();
});

router.delete('/team', (req, res) => {
    console.log("handling DELETE request...");
    res.end();
});

/*router.param('id', (req, res, next, id) => {
    /*if(isNaN(id)) {
        next(`${id} is not a valid number`);
    }
    next();
})*/

module.exports = router;