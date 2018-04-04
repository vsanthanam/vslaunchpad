# find me on the internet

Like many of us on GitHub, I've got a [personal website](https://www.vsanthanam.com) that contains some general information about me and my profile as an engineer.

But, as time as gone on, I've found my portfolio & methods of contact splintering into dozens of accounts, urls, and repositories.

Then, it occurred to me that I have a domain, `vsanthanam.com`. I was able to set up subdomains to forward to my profile or project of choice using `{identity} [dot] vsanthanam [dot] com`

This way, I could easily send someone to, say, my LinkedIn profile with the following easy to remember url: `https://linkedin.vsanthanam.com`

 I wanted to make a visual representation of my online identities and projects, so I built this this simple React.js app that allows a user to easily find exactly what they're looking for.

check it out at `launchpad [dot] vsanthanam [dot] com`.

 * this project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), and is hosted on [surge.sh](https://surge.sh).
 * additional cra scripts from [custom-react-scripts](https://www.npmjs.com/package/custom-react-scripts)
 * CSS preprocessing with [LESS](https://lesscss.org)
 * JavaScript static type checking with [flow](https://www.flow.org)
 * CI with [Travis-CI](https://travis-ci.org)

 ## run it locally

 * make sure you've got node and npm installed on your machine
 * clone the repo and run `npm install`
 * run `npm start`

 ## make your own

 * you might want to edit the values for `deploy` key in the scripts part of `package.json` and replace that with your own thing.
 * you can edit colors in `colors.less`
 * edit `./src/dataSource/ProjectList.json` and `./src/dataSources/ProfileList.json` to populate your own values
 * run `npm run flow` to run static type checking.

 ## CI

[![Build Status](https://travis-ci.org/vsanthanam/vslaunchpad.svg?branch=master)](https://travis-ci.org/vsanthanam/vslaunchpad)
