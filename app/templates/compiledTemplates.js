module.exports = function(Handlebars) {

var templates = {};

templates["entrepreneur_schedules"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <tr>\n            <td>";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (helper = helpers.company) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.company); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (helper = helpers.location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          </tr>\n        ";
  return buffer;
  }

  buffer += "<div class=\"container\" id=\"schedule-main\">\n  <div id=\"company-info\">\n    <h2 id=\"company-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n  </div>\n  <div id=\"company-schedule-container\" class=\"table-responsive\">\n    <h3 class=\"sub-header\">Meetings Schedule</h3>\n    <table id=\"schedule-table\" class=\"table table-striped table-bordered\">\n      <thead id=\"schedule-table-head\">\n        <tr id=\"schedule-row-head\">\n          <th>Time</th>\n          <th>Company Name</th>\n          <th>Location</th>\n        </tr>\n      </thead>\n      <tbody id=\"schedule-table-body\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.meetings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tbody>\n    </table>\n  </div>\n</div>\n";
  return buffer;
  });

templates["entrepreneurs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel panel-primary\" id=\"entrepreneurs-list-panel\">\n  <div class=\"panel-heading\">\n    <h1 class=\"panel-title\">Entrepreneurs</h1>\n  </div>\n  <div class=\"panel-body\" id=\"entrepreneurs-list\">\n  </div>\n</div>";
  });

templates["join"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container hidden\">\n  <form id=\"join\" class=\"form-signin\" role=\"form\">\n    <h2 class=\"form-signin-heading\">Join</h2>\n    <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" required autofocus>\n      #shadow-root (user-agent)\n        <div id=\"inner-editor\"></div>\n        <div pseudo=\"-webkit-input-placeholder\" id=\"placeholder\" style=\"visibility: visible; text-overflow: clip;\">Username</div>\n    </input>\n    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email\" required>\n      #shadow-root (user-agent)\n        <div id=\"inner-editor\"></div>\n        <div pseudo=\"-webkit-input-placeholder\" id=\"placeholder\" style=\"visibility: visible; text-overflow: clip;\">Email</div>\n    </input>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" required>\n      #shadow-root (user-agent)\n        <div id=\"inner-editor\"></div>\n        <div pseudo=\"-webkit-input-placeholder\" id=\"placeholder\" style=\"visibility: visible; text-overflow: clip;\">Password</div>\n    </input>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n  </form>\n</div>";
  });

templates["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"navbar\">\n</div>\n<div class=\"masthead container theme-showcase col-xs-12\">\n  <h1>The Capital <span class=\"white\">Un</span>Conference</h1>\n</div>\n<div id=\"overview\">\n</div>\n<div id=\"entrepreneur-schedule\">\n</div>";
  });

templates["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container hidden\">\n  <form id=\"login\" class=\"form-signin\" role=\"form\">\n    <h2 class=\"form-signin-heading\">Login</h2>\n    <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" required autofocus>\n      #shadow-root (user-agent)\n        <div id=\"inner-editor\"></div>\n        <div pseudo=\"-webkit-input-placeholder\" id=\"placeholder\" style=\"visibility: visible; text-overflow: clip;\">Username</div>\n    </input>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" required>\n      #shadow-root (user-agent)\n        <div id=\"inner-editor\"></div>\n        <div pseudo=\"-webkit-input-placeholder\" id=\"placeholder\" style=\"visibility: visible; text-overflow: clip;\">Password</div>\n    </input>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n  </form>\n</div>\n";
  });

templates["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n        <!-- active user session -->\n        <a class=\"navbar-brand logout\" href=\"#\">Logout</a>\n      ";
  }

function program3(depth0,data) {
  
  
  return "\n        <!-- no user session -->\n        <a class=\"navbar-brand login\" href=\"#\">Login</a>\n        <a class=\"navbar-brand join\" href=\"#\">Join</a>\n      ";
  }

  buffer += "<div class=\"navbar navbar-default navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div id=\"session\" class=\"navbar-header\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.session), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a href=\"#\">Home</a>\n        </li>\n        <li>\n          <a href=\"#\">Entrepreneurs</a>\n        </li>\n        <li>\n          <a href=\"#\">Investors</a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            Dropdown\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li>\n              <a href=\"#\">Upload Excel</a>\n            </li>\n            <li>\n              <a href=\"#\">Schedule Meetings</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });

return templates;

};