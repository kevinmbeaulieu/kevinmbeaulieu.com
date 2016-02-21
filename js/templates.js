Handlebars.registerPartial("footer", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    <div class=\"triangle\"></div>\n</footer>\n";
},"useData":true}))
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["404"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<h1>Sorry, that page doesn't exist.</h1>\n<p class=\"subtitle\">Please use the links in the header, or check out a project directly below.\n\n"
    + ((stack1 = container.invokePartial(partials["projects-grid"],depth0,{"name":"projects-grid","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"intro-section\">\n    <canvas id=\"shapes\" width=\"700px\"></canvas>\n    <object id=\"title\" type=\"image/svg+xml\" data=\"img/title.svg\">\n        <img id=\"title\" src=\"img/title.png\" alt=\"Kevin Beaulieu\" />\n    </object>\n</section>\n\n<section class=\"center-text\">\n    <h2><a name=\"mystory\">\n        My Story\n    </a></h2>\n    <p>\n        My name is Kevin.<br/>\n        I'm a computer science & philosophy major at Cornell University.\n    </p>\n    <p>\n        I'm a <span class=\"italics\">thinker</span>, a <span class=\"italics\">software\n        engineer</span>, & a <span class=\"italics\">designer</span>.\n    </p>\n    <p>\n        I love to contemplate challenging problems<br/>\n        and craft creative, interdisciplinary solutions.\n    </p>\n</section>\n\n"
    + ((stack1 = container.invokePartial(partials["projects-grid"],depth0,{"name":"projects-grid","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<section>\n    <h2><a name=\"letstalk\">\n        Let's Talk!\n    </a></h2>\n    <p>\n        <a href=\"https://www.linkedin.com/in/kevinmbeaulieu\" target=\"_blank\">LinkedIn</a><br/>\n        (614) 477-6779<br/>\n        <a href=\"mailto:kevinmbeaulieu@gmail.com?Subject=Hi!\" target=\"_top\">\n            kevinmbeaulieu@gmail.com\n        </a><br/>\n    </p>\n</section>\n\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
Handlebars.registerPartial("header", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"header-container\">\n    <header>\n        <h2>\n            <object class=\"header-title\" type=\"image/svg+xml\" data=\"img/title-mobile.svg\">\n                <img class=\"header-title\" src=\"img/title-mobile.png\" alt=\"Kevin Beaulieu\" />\n            </object>\n        </h2>\n        <div class=\"links\">\n            <h3><a href=\"index.html\">\n                    Home\n            </a></h3>\n            <h3><a href=\"index.html#mystory\">\n                My Story\n            </a></h3>\n            <div class=\"spacer\"></div>\n            <h3><a href=\"#mywork\">\n                My Work\n            </a></h3>\n            <h3><a href=\"index.html#letstalk\">\n                Let's Talk!\n            </a></h3>\n        </div>\n    </header>\n</section>\n";
},"useData":true}))
Handlebars.registerPartial("projects-grid", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section>\n    <h2><a name=\"mywork\">\n        My Work\n    </a></h2>\n    <div class=\"project-grid\">\n        <div class=\"cell cell-1x1\">\n            <a href=\"electrode-app.html\">\n                Electrode\n            </a>\n        </div>\n        <div class=\"cell cell-1x1\">\n            <a href=\"lily-os.html\">\n                Lily OS\n            </a>\n        </div>\n        <div class=\"cell cell-1x2\">\n            <a href=\"endless.html\">\n                Endless\n            </a>\n        </div>\n        <div class=\"cell cell-1x1\">\n            <a href=\"cerebrum-app.html\">\n                Cerebrum\n            </a>\n        </div>\n        <div class=\"cell cell-2x1\">\n            <a href=\"3d-rendering-algorithm.html\">\n                3D Rendering Algorithm\n            </a>\n        </div>\n        <span class=\"cell cell-1x1\"></span>\n        <div class=\"cell cell-1x1\">\n            <a href=\"weather-app.html\">\n                Weather\n            </a>\n        </div>\n        <div class=\"cell cell-1x2\">\n            <a href=\"thumbtack.html\">\n                Thumbtack\n            </a>\n        </div>\n        <div class=\"cell cell-1x1\">\n            <a href=\"password-manager.html\">\n                Secure Password Manager\n            </a>\n        </div>\n        <span class=\"cell cell-1x1\"></span>\n        <div class=\"cell cell-1x1\">\n            <a href=\"flint.html\">\n                Flint\n            </a>\n        </div>\n        <div class=\"cell cell-1x1\">\n            <a href=\"analytic-services.html\">\n                Analytic Services Inc.\n            </a>\n        </div>\n        <div class=\"cell cell-1x1\">\n            <a href=\"3d-tetris.html\">\n                3D Tetris\n            </a>\n        </div>\n        <div class=\"cell cell-1x2\">\n            <a href=\"gizmos-gadgets.html\">\n                Gizmos & Gadgets\n            </a>\n        </div>\n        <span class=\"cell cell-1x1\"></span>\n        <div class=\"cell cell-1x1\">\n            <a href=\"remember-app.html\">\n                re:member\n            </a>\n        </div>\n        <div class=\"cell cell-1x1\">\n            <a href=\"cuauv.html\">\n                Cornell Autonomous Underwater Vehicle Team\n            </a>\n        </div>\n        <div class=\"cell cell-2x1\">\n            <a href=\"universe-hypothesis.html\">\n                Cognitive Hypothesis of the Universe\n            </a>\n        </div>\n        <span class=\"cell cell-1x1\"></span>\n        <div class=\"cell cell-1x1\">\n            <a href=\"nswc.html\">\n                Naval Surface Warfare Center\n            </a>\n        </div>\n        <span class=\"cell cell-1x1\"></span>\n    </div>\n</section>\n";
},"useData":true}))
this["Handlebars"]["templates"]["project"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <p class=\"subtitle\">"
    + ((stack1 = ((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subtitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <img src=\"/img/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.image_alt || (depth0 != null ? depth0.image_alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_alt","hash":{},"data":data}) : helper)))
    + "\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.text_right || (depth0 != null ? depth0.text_right : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text_right","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<main>\n    <h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <section class=\"content\">\n        <div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <p>"
    + ((stack1 = ((helper = (helper = helpers.text_left || (depth0 != null ? depth0.text_left : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text_left","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n        </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text_right : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n</main>\n\n"
    + ((stack1 = container.invokePartial(partials["projects-grid"],depth0,{"name":"projects-grid","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});