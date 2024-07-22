var fs = require('fs');
var fileName = './data/simpsons_entrepreneurs.json';
var sha1 = require('sha1');
var _ = require('underscore');

var getCookies = require('./lib/getCookies');

var Promise = require('bluebird');

Promise.promisifyAll(fs);

var Entrepreneurs = fs.readFileAsync(fileName, 'utf8')
  .then(JSON.parse);

function _mapAttributes(company) {
  return {
    _id: company._id,
    name: company.name
  };
}

function _mapAllAttributes(company) {
  return {
    _id: company._id,
    name: company.name,
    type: company.type,
    index: company.index,
    meetings: company.meetings
  };
}

function _find(companies, id) {
  var match = _.find(companies, function (company) {
    return company._id === parseInt(id);
  });
  if (!match) {
    throw new Promise.RejectionError("ID not found");
  } else {
    return match;
  }
}

function _where(companies, properties) {
  var matches = _.where(companies, properties);
  return matches;
}

var DS = function () {};

DS.prototype.allCompanies = function () {
  return Companies.map(_mapAllAttributes);
};

DS.prototype.allEntrepreneurs = function () {
  var entrepreneurs = Companies.map(_where, {type: 'entrepreneur'});
  return entrepreneurs.map(_mapAllAttributes);
};

DS.prototype.allInvestors = function () {
  var investors = Companies.map(_where, {type: 'investors'});
  return investors.map(_mapAllAttributes);
};

DS.prototype.find = function (id) {
  return Companies.then(function (companies) {
    return _find(companies, id);
  })
  .then(_mapAllAttributes);
};

var Users = [];

function _findByUsername(username) {
  var user = _.findWhere(Users, {username: username});

  return Promise.delay(30).thenReturn(user);
}

function _returnUser(newUser) {
  console.log(newUser);
  return _.pick(newUser, 'username', '_id');
}

function _matchPasswords(req) {
  console.log(req.body.username);
  return _findByUsername(req.body.username).then(function (activeUser) {
    console.log(activeuser);
    if (activeUser && req.body.password === activeUser.password) {
      return activeUser;
    } else {
      return Promise.reject(new Error('username not found'));
    }
  });
}

function _generateToken(activeUser) {
  var token = sha1(_.now().toString());
  activeUser.token = token;
  return activeUser;
}

DS.prototype.authUser = function (req) {
  return _matchPasswords(req).then(_generateToken);
};

DS.prototype.authUser = function (req) {
  return _matchPasswords(req).then(_generateToken);
};

function _findUserByToken(req) {
  var cookies = getCookies(req);
  var user = _.findWhere(Users, {token: cookies.session});
  return Promise.delay(30).thenReturn(user);
}

DS.prototype.checkAuth = function (req) {
  return _findUserByToken(req).then(function (activeUser) {
    if (!activeUser) {
      return Promise.reject('No Session');
    }
    return _returnUser(activeUser);
  });
};

DS.prototype.clearSession = function (req) {
  return _findUserByToken(req).then(function (activeUser) {
    if (activeUser) {
      activeUser.auth = null;
    }
    return activeUser;
  });
};

module.exports = DS;