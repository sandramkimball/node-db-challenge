const db = require('../data/db-config.js');

module.exports = {
    addResource,
    getResources,
    getResById,
    addProject,
    getProjects,
    addTask,
    getTasks,
    getTaskById,
    findById,
};

//RESOURCES
function getResources(){
    return db.select('*').from('resources')
}; 

function getResById(id){
    return db('tasks')
        .where({ id })
        .first();
}

function addResource (rsrc){
    return db('resources')
    .insert(rsrc)
    .then(ids=> {
        return db('resources').where({id: ids[0]}).first();
    })
};


//PROJECTS
function getProjects(){
    return db.select('*').from('projects')
};

function addProject(prj){
    return db('projects')
    .insert(prj)
    .then(ids=> {
        return db('projects').where({id: ids[0]}).first();
    })
};


//TASKS
function getTasks(){
    return db.select('*').from('tasks')
};

function getTaskById(id){
    return db('tasks')
        .where({ id })
        .first();
}

function addTask(tsk){
    return db('task')
    .insert(tsk)
    .then(ids=> {
        return db('projects').where({id: ids[0]}).first();
    })
};


//OTHER
function findById(id){
    return db('projects')
        .where({ id })
        .first();
}