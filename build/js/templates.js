Handlebars.registerPartial("footer", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    <a class=\"scroll\" data-speed=\"100\" href=\"#top\">\n        <div class=\"triangle\"></div>\n    </a>\n</footer>\n";
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
Handlebars.registerPartial("header", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.top,depth0,{"name":"top","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<section id=\"header-container\">\n    <header>\n        <h2>\n            <object class=\"header-title\" type=\"image/svg+xml\" data=\"img/title-mobile.svg\">\n                <img class=\"header-title\" src=\"img/title-mobile.png\" alt=\"Kevin Beaulieu\" />\n            </object>\n        </h2>\n        <div class=\"links\">\n            <p><a href=\"index.html\">\n                    Home\n            </a></p>\n            <p><a href=\"index.html#mystory\">\n                My Story\n            </a></p>\n            <div class=\"spacer\"></div>\n            <p><a href=\"#mywork\">\n                My Work\n            </a></p>\n            <p><a href=\"index.html#letstalk\">\n                Let's Talk!\n            </a></p>\n        </div>\n    </header>\n</section>\n";
},"usePartial":true,"useData":true}))
this["Handlebars"]["templates"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.top,depth0,{"name":"top","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<section id=\"intro-section\">\n    <canvas id=\"shapes\" width=\"700px\"></canvas>\n    <object id=\"title\" type=\"image/svg+xml\" data=\"img/title.svg\">\n        <img id=\"title\" src=\"img/title.png\" alt=\"Kevin Beaulieu\" />\n    </object>\n</section>\n\n<section class=\"center-text\">\n    <h2><a name=\"mystory\">\n        My Story\n    </a></h2>\n    <p>\n        Hi, my name is Kevin!<br/>\n        I'm a computer science & philosophy major at Cornell University.\n    </p>\n    <p>\n        I'm a <span class=\"italics\">thinker</span>, a <span class=\"italics\">software\n        engineer</span>, & a <span class=\"italics\">designer</span>.\n    </p>\n    <p>\n        I love to contemplate challenging problems<br/>\n        and draw on many disciplines to craft creative solutions.\n    </p>\n</section>\n\n"
    + ((stack1 = container.invokePartial(partials["projects-grid"],depth0,{"name":"projects-grid","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<section>\n    <h2><a name=\"letstalk\">\n        Let's Talk!\n    </a></h2>\n    <p>\n        <a href=\"https://www.linkedin.com/in/kevinmbeaulieu\" target=\"_blank\">LinkedIn</a><br/>\n        <a href=\"https://www.github.com/kevinmbeaulieu\" target=\"_blank\">GitHub</a><br/>\n        <a href=\"mailto:kevinmbeaulieu@gmail.com?Subject=Hi!\" target=\"_top\">kevinmbeaulieu@gmail.com</a>\n    </p>\n</section>\n\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
Handlebars.registerPartial("projects-grid", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section>\n    <h2><a name=\"mywork\">\n        My Work\n    </a></h2>\n\n    <div class=\"projects\">\n        <div class=\"project-category\">\n            <h4>Jobs</h4>\n            <div class=\"project\">\n                <a href=\"thumbtack.html\">\n                    Thumbtack\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"endless.html\">\n                    Endless\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"nswc.html\">\n                    Naval Surface<br/>Warfare Center\n                </a>\n            </div>\n        </div>\n\n        <div class=\"project-category\">\n            <h4>Design</h4>\n            <div class=\"project\">\n                <a href=\"inbox-prototype.html\">\n                    Google Inbox prototype\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"weather-app.html\">\n                    Weather animations\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"skim-extension.html\">\n                    Skim<br/>(Browser extension)\n                </a>\n            </div>\n        </div>\n\n        <div class=\"project-category\">\n            <h4>Research</h4>\n            <div class=\"project\">\n                <a href=\"3d-rendering-algorithm.html\">\n                    3D graphics rendering algorithm\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"password-manager.html\">\n                    Secure password manager\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"lily-os.html\">\n                    Lily OS concept\n                </a>\n            </div>\n        </div>\n\n        <div class=\"project-category\">\n            <h4>Apps</h4>\n            <div class=\"project\">\n                <a href=\"cerebrum-app.html\">\n                    Cerebrum (Android)\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"electrode-app.html\">\n                    Electrode (iOS)\n                </a>\n            </div>\n            <div class=\"project\">\n                <a href=\"3d-tetris.html\">\n                    3D Tetris (Desktop)\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n";
},"useData":true}))
this["Handlebars"]["templates"]["project"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <p class=\"subtitle\">"
    + ((stack1 = ((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subtitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "class=\"half-width\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <img src=\"/img/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.image_alt || (depth0 != null ? depth0.image_alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_alt","hash":{},"data":data}) : helper)))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.video_frame : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div class=\"iphone-4s-frame\">\n                        <div class=\"video-responsive\">\n                            <video loop autoplay>\n                                <source src=\"img/"
    + alias4(((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n                                <img src=\"img/"
    + alias4(((helper = (helper = helpers.video_fallback || (depth0 != null ? depth0.video_fallback : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video_fallback","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.video_fallback_alt || (depth0 != null ? depth0.video_fallback_alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video_fallback_alt","hash":{},"data":data}) : helper)))
    + "\">\n                            </video>\n                        </div>\n                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div class=\"video-responsive\">\n                        <video loop autoplay>\n                            <source src=\"img/"
    + alias4(((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n                            <img src=\"img/"
    + alias4(((helper = (helper = helpers.video_fallback || (depth0 != null ? depth0.video_fallback : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video_fallback","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.video_fallback_alt || (depth0 != null ? depth0.video_fallback_alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video_fallback_alt","hash":{},"data":data}) : helper)))
    + "\">\n                        </video>\n                    </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <div class=\"half-width\">\n                "
    + ((stack1 = ((helper = (helper = helpers.text_right || (depth0 != null ? depth0.text_right : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text_right","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<main>\n    <h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <section class=\"content\">\n        <div "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text_right : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            "
    + ((stack1 = ((helper = (helper = helpers.text_left || (depth0 != null ? depth0.text_left : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text_left","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text_right : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n</main>\n\n"
    + ((stack1 = container.invokePartial(partials["projects-grid"],depth0,{"name":"projects-grid","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
Handlebars.registerPartial("top", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span id=\"top\"></span>\n";
},"useData":true}))