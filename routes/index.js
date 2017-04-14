let express = require('express');
let router = express.Router();

let projectRoutes = {
    'thumbtack': '/thumbtack',
    'endless': '/endless',
    'flint': '/flint',
    'password-manager': '/password-manager',
    'blur-focus': '/blur-focus',
    'clean-menu-bar': '/clean-menu-bar',
    'cerebrum-app': '/cerebrum-app',
    'electrode-app': '/electrode-app',
    '3d-tetris': '/3d-tetris',
    'inbox-prototype': '/inbox-prototype',
    'illustrations': '/illustrations',
    'weather-app': '/weather-app'
};

let pages = [
    {
        route: '/',
        config: require('../json/index.json')
    },
    {
        route: projectRoutes['thumbtack'],
        config: require('../json/thumbtack.json')
    },
    {
        route: projectRoutes['endless'],
        config: require('../json/endless.json')
    },
    {
        route: projectRoutes['flint'],
        config: require('../json/flint.json')
    },
    {
        route: projectRoutes['password-manager'],
        config: require('../json/password-manager.json')
    },
    {
        route: projectRoutes['blur-focus'],
        config: require('../json/blur-focus.json')
    },
    {
        route: projectRoutes['clean-menu-bar'],
        config: require('../json/clean-menu-bar.json')
    },
    {
        route: projectRoutes['cerebrum-app'],
        config: require('../json/cerebrum-app.json')
    },
    {
        route: projectRoutes['electrode-app'],
        config: require('../json/electrode-app.json')
    },
    {
        route: projectRoutes['3d-tetris'],
        config: require('../json/3d-tetris.json')
    },
    {
        route: projectRoutes['inbox-prototype'],
        config: require('../json/inbox-prototype.json')
    },
    {
        route: projectRoutes['illustrations'],
        config: require('../json/illustrations.json')
    },
    {
        route: projectRoutes['weather-app'],
        config: require('../json/weather-app.json')
    }
];

function createRoute(page) {
    let route = page.route;
    let config = page.config;

    // Store long description as array since JSON doesn't allow multiline strings
    if (config.hasOwnProperty('text_left')) {
        config.text_left = config.text_left.join(" ");
    }
    if (config.hasOwnProperty('text_right')) {
        config.text_right = config.text_right.join(" ");
    }

    // Provide route for same-page anchors
    config.route = route;

    // Provide routes for projects grid
    config.projectRoutes = projectRoutes;

    router.get(route, (req, res, next) => {
        res.render(page.route === '/' ? 'index' : 'project', config);
    });
}

pages.forEach(createRoute);

module.exports = router;
