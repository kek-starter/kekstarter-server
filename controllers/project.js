const path = require('path');
const Project = require(path.resolve('./models/project.js'));

exports.load = function(req, res, next, id) {
  Project.findById(id, function(err, project) {
    if (err) {
      return next(err);
    }

    req.project = project;
    next();
  });
}

exports.create = function(req, res, next) {
  const newProject = new Project(req.body);
  newProject.save(function(err, project) {
    if (err) {
      return next(err);
    }

    res.json({ project });
  })
}

exports.read = function(req, res, next) {
  res.json({ project: req.project });
}

exports.list = function(req, res, next) {
  const query = Project.find({}).sort({ createdAt: -1 });
  query.exec(function(err, projects) {
    if (err) {
      return next(err);
    }

    res.json({ projects });
  });
};
