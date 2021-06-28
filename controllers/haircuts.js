const express = require("express");
const haircutRoutes = express.Router();

const Haircut = require('../models/Haircut.js');

// Index
haircutRoutes.get("/",  (req, res) => {
    Haircut.find({}, (error, allHaircuts) => {
        res.send(allHaircuts)
    })
});

// New
/*  Here's a route for rendering a new.ejs file just to show I know to do it in non-React
*
*       haircutRouts.get('/new', (req, res) => {
*           res.render('new.ejs')
*       })
*
*  */

// Delete
haircutRoutes.route("/:id").delete((req, res) => {
    Haircut.findByIdAndDelete(req.params.id, (err, deletedHaircut) => {
        res.send(deletedHaircut);
    })
});

// Updates
haircutRoutes.put('/update/:id', (req, res) => {
    Haircut.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedHaircut) => {
        res.send(updatedHaircut);
    })
})

// Create
haircutRoutes.post("/add", (req, res) => {
    console.log("Haircut added", req.body);
    Haircut.create(req.body, (err, newHaircut) => {
        res.send(newHaircut);
    });
});

// New
/*  Here's a route for rendering a new.ejs file just to show I know to do it in vanilla JS
*
*       haircutRouts.get('/new', (req, res) => {
*           res.render('new.ejs')
*       })
*
*  */



module.exports = haircutRoutes;