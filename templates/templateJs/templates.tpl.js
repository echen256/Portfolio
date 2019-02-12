(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['portfolio'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container \">\r\n    <div class=\"row border-bottom border-secondary  textContainer\">\r\n        <p class=\"aboutMe\">\r\n            Portfolio\r\n        </p>\r\n\r\n    </div>\r\n    <div class=\"row\" id=\"root\">\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<script src=\"https://code.jquery.com/jquery-3.3.1.js\" crossorigin=\"anonymous\"></script>\r\n\r\n<script>\r\n\r\n    var root = $(\"#root\");\r\n    var projects = [\r\n        {\r\n            link: \"https://github.com/echen256/bAmazon\",\r\n            title: \"BAmazon: Database Intro\"\r\n        },\r\n        {\r\n            link: \"https://group-project-1.github.io/Presentation\",\r\n            title: \"Project 1: Event Finder\"\r\n        },\r\n        {\r\n            link: \"https://friendfinder978567583.herokuapp.com\",\r\n            title: \"FriendFinder: MySQL Intro\"\r\n        },\r\n        {\r\n            link: \"https://lit-thicket-39018.herokuapp.com\",\r\n            title: \"Project 2: StockX\"\r\n        },\r\n        {\r\n            link : \"https://protected-fjord-38881.herokuapp.com/\",\r\n            title : \"MongoDB Hw: News Scraper\"\r\n        }\r\n    ];\r\n\r\n    for (var i = 0; i < projects.length; i++) {\r\n        console.log(projects[i]);\r\n        var workEntry = Handlebars.templates.workEntry(projects[i]);\r\n        root.append($(workEntry));\r\n    }\r\n\r\n</script>";
},"useData":true});
templates['workEntry'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class='col-sm-12 col-md-4'>\r\n    <a class='nav-link textContainer' href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + ">\r\n        "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n    </a>\r\n\r\n    <div class = \"textContainer\">\r\n        Coming Soon!\r\n    </div>\r\n\r\n  \r\n</div>";
},"useData":true});
})();