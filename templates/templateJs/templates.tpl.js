(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['portfolio'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n    <div class=\"container \">\r\n        <div class=\"row border-bottom border-secondary\">\r\n            <p class=\"aboutMe\">\r\n                Portfolio\r\n            </p>\r\n\r\n        </div>\r\n        <div class=\"row\" id = \"root\">\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<script src=\"https://code.jquery.com/jquery-3.3.1.js\" crossorigin=\"anonymous\"></script>\r\n\r\n<script>\r\n\r\n    var root = $(\"#root\");\r\n    var links = [\"https://group-project-1.github.io/Presentation/\",\r\n        \"https://github.com/echen256/bAmazon\",\r\n\r\n        \"https://friendfinder978567583.herokuapp.com/\",\r\n        \"https://lit-thicket-39018.herokuapp.com/\"\r\n    ];\r\n    var titles = [\"Project 1: Event Finder\",\r\n        \"BAmazon: Database Intro\",\r\n        \"FriendFinder: MySQL Intro\",\r\n        \"Project 2: StockX\"\r\n    ];\r\n\r\n    for (var i = 0; i < titles.length; i++) {\r\n        var workEntry = Handlebars.templates.workEntry({ link: links[i], title: titles[i] });\r\n        root.append($(workEntry));\r\n    }\r\n\r\n</script>";
},"useData":true});
templates['workEntry'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='col-sm-12 col-md-4 label'>\r\n    <a class='nav-link' href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + ">\r\n        "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n    </a>\r\n</div>";
},"useData":true});
})();