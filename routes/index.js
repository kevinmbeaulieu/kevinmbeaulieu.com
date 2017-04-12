var express = require('express');
var router = express.Router();

var pages = [
    {
        route: '/',
        config: require('../json/index.json')
    },
    {
        route: '/thumbtack',
        config: require('../json/thumbtack.json')
    },
    {
        route: '/endless',
        config: require('../json/endless.json')
    },
    {
        route: '/flint',
        config: require('../json/flint.json')
    },
    {
        route: '/password-manager',
        config: require('../json/password-manager.json')
    },
    {
        route: '/blur-focus',
        config: require('../json/blur-focus.json')
    },
    {
        route: '/clean-menu-bar',
        config: require('../json/clean-menu-bar.json')
    },
    {
        route: '/cerebrum-app',
        config: require('../json/cerebrum-app.json')
    },
    {
        route: '/electrode-app',
        config: require('../json/electrode-app.json')
    },
    {
        route: '/3d-tetris',
        config: require('../json/3d-tetris.json')
    },
    {
        route: '/inbox-prototype',
        config: require('../json/inbox-prototype.json')
    },
    {
        route: '/illustrations',
        config: require('../json/illustrations.json')
    },
    {
        route: '/weather-app',
        config: require('../json/weather-app.json')
    }
];

function createRoute(page) {
    var route = page.route;
    var config = page.config;

    // Store long description as array since JSON doesn't allow multiline strings
    if (config.hasOwnProperty('text_left')) {
        config.text_left = config.text_left.join(" ");
    }
    if (config.hasOwnProperty('text_right')) {
        config.text_left = config.text_right.join(" ");
    }

    // Provide route for same-page anchors
    config.helpers = { 'route': () => route };

    router.get(route, (req, res, next) => {
        res.render(page.route === '/' ? 'index' : 'project', config);
    });
}

pages.forEach(createRoute);

module.exports = router;
