var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        helpers: {
            route: () => "/"
        }
    });
});

router.get('/thumbtack', (req, res, next) => {
    res.render('project', {
        title: "Thumbtack",
        subtitle: "Software Engineer Intern",
        images: [
            {
                file: "thumbtack.png",
                alt_text: "Thumbtack"
            }
        ],
        text_left: "<p><a href='https://www.thumbtack.com'\
            target='_blank'>Thumbtack</a> is transforming the way people\
            complete projects. With Thumbtack, customers can hire professionals\
            at just about anything, from painters to music teachers to\
            personal chefs. I spent two summers as an intern at Thumbtack\
            working on full-stack web, native Android app, and native iOS app\
            (in both Swift & Objective-C) development.</p><p>On the web side,\
            I re-build from scratch the page where customers leave reviews\
            for professionals to match a new design. I worked to ensure the\
            page looked perfect on devices of any size, since a significant\
            portion of Thumbtack's users visit the website from their phones.\
            I also added the ability for customers to rate professionals not\
            just on their overall service quality, but also on specific\
            categories like \"Professionalism\" and \"Value.\" These new\
            features drove an increase both in the number of reviews received\
            and the value of these reviews to customers, professionals, and\
            Thumbtack.</p><p>On the native mobile apps, I built a new feature\
            for Thumbtack pros to filter and sort the requests they receive\
            from customers. Since many pros receive more requests every day\
            than they can handle, my work has allowed them to spend their time\
            focusing on what they love to do, rather than stuck going through\
            requests they aren't suited for.</p>\
            <p style='font-style: italic;'>I will be starting full-time at\
            Thumbtack in mid-2017.</p>",
        helpers: {
            route: () => "/thumbtack"
        }
    });
});

router.get('/endless', (req, res, next) => {
    res.render('project', {
        title: "Endless",
        subtitle: "Software Engineer Intern",
        images: [
            {
                file: "endless.png",
                alt_text: "Endless OS"
            }
        ],
        text_left: "<p><a href='https://endlessm.com' target='_blank'>Endless</a>\
            is bringing computers to people in the developing world by creating\
            an operating system, ecosystem of applications, and inexpensive\
            computer hardware line. Endless focuses on user-centered design to\
            develop an operating system which is intuitive and suits the needs\
            of its customers, many of whom have never used a computer\
            before.</p>\
            <p>I worked on motion graphics and front-end programming for\
            Endless's operating system. I designed and implemented subtle\
            animations applied to microinteractions such as opening a window,\
            clicking a button, or showing a menu. The goal of these animations\
            was to delight users with a more polished interaction and to help\
            guide their eyes toward relevant UI elements such as a window that\
            just opened.</p>",
        helpers: {
            route: () => "/endless"
        }
    });
});

router.get('/flint', (req, res, next) => {
    res.render('project', {
        title: "Flint",
        subtitle: "Mentorship program for Cornell students",
        text_left: "<p>Flint seeks to bridge academic and experiential\
            education by connecting students with established entrepreneurs who\
            will provide them with both guidance and real-world challenges. At\
            its core, Flint is a mentorship program between Cornell students\
            and experienced professionals and/or Cornell alumni. Flint is\
            unique and highly accessible in that it provides a convenient,\
            interactive online platform upon which students and employers can\
            communicate with each other.</p>\
            <p>As Software Lead of Flint, I led the development of Flint's\
            website. The website is the main portal through which students and\
            mentors find and connect with one another. In addition to managing\
            the software team, I focused primarily on design and front-end\
            programming for the website.</p>",
        helpers: {
            route: () => "/flint"
        }
    });
});

router.get('/password-manager', (req, res, next) => {
    res.render('project', {
        title: "Secure Password Manager",
        subtitle: "CS 5431 Project",
        text_left: "<p>Over the course of the spring '16 semester, I am working\
            with a team of 3 other students to develop a secure password\
            manager as part of our System Security course. The application will\
            allow users to safely store the username & password for their online\
            accounts, and retrieve them with a master password (much\
            like <a href='https://lastpass.com'>LastPass</a>).</p>\
            <p>The main goal of this project is to gain experience developing a\
            system which meets certain security requirements (e.g., keeping\
            users' passwords confidential, authenticating users properly) so\
            that we would feel confident storing our own passwords and bank\
            information in this system.</p>",
        helpers: {
            route: () => "/password-manager"
        }
    });
});

router.get('/blur-focus', (req, res, next) => {
    res.render('project', {
        title: "BlurFocus (macOS)",
        subtitle: "SIMBL plugin to blur windows when out of focus on macOS",
        images: [
            {
                file: "blurfocus.png",
                alt_text: "BlurFocus screenshot"
            }
        ],
        text_left: "<p><a href='https://www.github.com/kevinmbeaulieu/BlurFocus'\
            target='_blank'>BlurFocus</a> is a\
            <a href='http://www.culater.net/software/SIMBL/SIMBL.php'\
            target='_blank'>SIMBL</a> plugin for macOS which\
            blurs windows when out of focus. I forked the project from\
            w0lfschild's <a href='https://www.github.com/w0lfschild/BlurFocus'\
            target='_blank'>repo</a>, reworking the codebase from the ground up\
            to support animated transitions and fix rendering bugs in the\
            original version.</p>",
        helpers: {
            route: () => "/blur-focus"
        }
    });
});

router.get('/clean-menu-bar', (req, res, next) => {
    res.render('project', {
        title: "CleanMenuBar (macOS)",
        subtitle: "SIMBL plugin to hide menu bar icons for third-party apps on macOS",
        images: [
            {
                file: "cleanmenubar.png",
                alt_text: "CleanMenuBar preview"
            }
        ],
        text_left: "<p><a href='https://www.github.com/kevinmbeaulieu/CleanMenuBar'\
            target='_blank'>CleanMenuBar</a> is a\
            <a href='http://www.culater.net/software/SIMBL/SIMBL.php'\
            target='_blank'>SIMBL</a> plugin for macOS which\
            enables you to clean up your cluttered menu bar by specifying\
            third-party apps to hide from the menu bar (essentially an\
            open-source version of <a href='https://www.macbartender.com'\
            target='_blank'>Bartender</a>).</p>",
        helpers: {
            route: () => "/clean-menu-bar"
        }
    });
});

router.get('/cerebrum-app', (req, res, next) => {
    res.render('project', {
        title: "Cerebrum App",
        images: [
            {
                file: "cerebrum-02.png",
                alt_text: "Cerebrum screenshot"
            }
        ],
        text_right: "<p>Cerebrum is a new kind of reminders app organizing\
            everything on your mind by importance. Your thoughts float on a\
            rotating cloud so you don't have to keep everything in your head.\
            More important thoughts will appear larger on the cloud so they\
            stand out, with lower priority items fading away into the\
            background.</p>\
            <p>Cerebrum is unique from other reminders and to-do apps because\
            you can add everything on your mind, from homework assignments to a\
            random idea for a project you want to work on when you find some\
            free time, without hiding what is important. Most reminders apps\
            display items in a list, but this discourages users from adding\
            anything but the essentials for fear of cluttering up the list.</p>\
            <p><a href='https://play.google.com/store/apps/details?id=com.kevinmbeaulieu.app'\
            target='_blank'><img src='img/get-it-on-google-play.png'\
            style='width: 129px'></a></p>",
        helpers: {
            route: () => "/cerebrum-app"
        }
    });
});

router.get('/electrode-app', (req, res, next) => {
    res.render('project', {
        title: "Electrode App",
        images: [
            {
                file: "electrode.jpg",
                alt_text: "Electrode screenshot",
            }
        ],
        text_right: "<p>Electrode is an iOS game I created in high school. It's\
            a 2d physics-based game in which the user must guide charged\
            particles to a target. Touching the screen creates a positive field\
            around your finger, attracting negative particles and repeling\
            positive ones.</p>\
            <p>I had a few goals in mind with this project. My main focus was\
            on the visual aspects of the game. I wanted everything from the\
            field your finger creates to the background to be built upon\
            beautiful particle effects. I had first discovered particle effects\
            when developing re:member, but the effects were not incorporated\
            into that game nearly as tightly as in Electrode.</p>",
        helpers: {
            route: () => "/electrode-app"
        }
    });
});

router.get('/3d-tetris', (req, res, next) => {
    res.render('project', {
        title: "3D Tetris",
        images: [
            {
                file: "3d-tetris-01.png",
                alt_text: "3D Tetris screenshot"
            }
        ],
        text_left: "<p>3D Tetris is a game I built in high school to learn how\
            to use the <a href='https://unity3d.com' target='_blank'>Unity</a>\
            game engine.</p>",
        helpers: {
            route: () => "/3d-tetris"
        }
    });
});

router.get('/inbox-prototype', (req, res, next) => {
    res.render('project', {
        title: "Google Inbox Prototype",
        video: "inbox-prototype.mp4",
        video_frame: false,
        video_fallback: "inbox-prototype.png",
        video_fallback_alt: "Google Inbox Prototype",
        text_right: "<p>While learning to use <a\
            href='https://facebook.github.io/origami/' target='_blank'>Origami</a\>\
            & <a href='https://en.wikipedia.org/wiki/Quartz_Composer'\
            target='_blank'>Quartz Composer</a> for creating interactive\
            prototypes, I built this recreation of\
            <a href='https://www.google.com/inbox/' target='_blank'>Google\
            Inbox for iOS</a>. I created all of the graphics, including the\
            icons, from scratch in <a href='http://sketchapp.com'\
            target='_blank'>Sketch</a> (excluding the stock photos used as\
            profile pictures). I then fed the Sketch file into Quartz Composer\
            and used Origami to create all of the interactions & animations\
            that you see in this demo.</p>",
        helpers: {
            route: () => "/inbox-prototype"
        }
    });
});

router.get('/illustrations', (req, res, next) => {
    res.render('project', {
        title: "Vector Illustrations",
        subtitle: "Made in Sketch",
        images: [
            {
                file: "macintosh.png",
                alt_text: "Original Macintosh computer",
                caption: "Original Macintosh computer"
            },
            {
                file: "macbook.png",
                alt_text: "MacBook (Front View)",
                caption: "MacBook (Front View)"
            },
            {
                file: "macbook-keyboard.png",
                alt_text: "MacBook Pro (Top View)",
                caption: "MacBook Pro (Top View)"
            }
        ],
        helpers: {
            route: () => "/illustrations"
        }
    });
});

router.get('/weather-app', (req, res, next) => {
    res.render('project', {
        title: "Weather App",
        video: "weather.mp4",
        video_frame: true,
        video_fallback: "weather-sunny.png",
        video_fallback_alt: "Weather app screencast",
        text_right: "<p>This iOS app was an exercise in using\
            <a href='http://www.adobe.com/products/aftereffects.html'\
            target='_blank'>Adobe After Effects</a> to create animations like\
            the weather conditions shown\
            in this app concept.</p>",
        helpers: {
            route: () => "/weather-app"
        }
    });
});


module.exports = router;
