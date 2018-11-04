const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const {check, body, validationResult} = require('express-validator/check');

const {Employee} = require('../models/employee'); //destructuring

//router.get('/list', async (req, res) => {
//getting from index.js: localhost:3000/employees/list
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        await res.send(employees);
    } catch (error) {
        console.log(`Error in Getting Employees from DB: ${JSON.stringify(error, undefined, 2)}`);
    }
});

router.get('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    try {
        const employee = await Employee.findById(req.params.id);
        await res.send(employee);
    } catch (error) {
        console.log(`Error while getting employee with id: ${req.params.id}`);
    }

});

router.post('/',
    [check('name', 'Incorrect length of name parameter').isLength({min: 3})],
    [body('position', 'Incorrect length of position parameter').isLength({min: 1})],
    [body('office', 'Incorrect length of office parameter').isLength({min: 3})]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }
        let emp = new Employee({
            avatar: req.body.avatar,
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary
        });
        try {
            const savedEmployee = await emp.save();
            await res.send(savedEmployee);
        } catch (error) {
            console.log(`Error in Saving Employee to DB: ${JSON.stringify(error, undefined, 2)}`);
        }
    });

router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    let emp = {
        avatar: req.body.avatar,
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true});
        await res.send(updatedEmployee);
    } catch (error) {
        console.log(`Error in Updating Employee to DB: ${JSON.stringify(error, undefined, 2)}`);
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    try {
        const deletedEmployee = await Employee.findByIdAndRemove(req.params.id)
        await res.send(deletedEmployee);
    } catch (error) {
        console.log(`Error in Deleting Employee from DB: ${JSON.stringify(error, undefined, 2)}`);
    }
});

module.exports = router;