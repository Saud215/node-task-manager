const { createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middleware/async');
const Task = require('../models/Task');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });

    // res.status(500).json({msg: error});
    // this above line of code was fixed and added to all of other function using the error handler middleware. 
}); 


const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});


const getTask = asyncWrapper(async (req, res, next) => {
  // const taskID = req.params.id;
  // below is the representation of the alias method
  const { id: taskID } = req.params;

  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`no task with id: ${taskID}`, 404));
    // return res.status(404).json({ msg: `no task with id: ${taskID}` });
}

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`no task with id: ${taskID}`, 404));
}

// res.status(200).send()
  res.status(200).json({ task: null, msg: "success" });
});
    
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`no task with id: ${taskID}`, 404));
  }
  
  res.status(200).json({ task });
});

// difference between the put the patch method is that 
// put method is used to overwrite the whole document 
// while the patch method is used to update the document 
// the overwrite does'nt happen automatically but we have to pass a key value pair of 'overwrite: true' inside the options of the findAndUpdate().
// but patch methods of mongoose does'nt return the new updated object and run validators for the patching. To perform both of them we have to pass the options inside the findOneAndUpdate method of mongoose(patch method of the mongoose).

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask};