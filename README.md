# find me on the internet

Like many of us on GitHub, I've got a [personal website](https://www.vsanthanam.com) that contains some general information about me and my profile as an engineer.

But, as time has gone on, I've found my portfolio & methods of contact splintering into dozens of accounts, urls, and repositories.

Then, it occurred to me that I have a domain under my control, `vsanthanam.com`. I was able to set up subdomains to forward to my profile or project of choice using `{identity} [dot] vsanthanam [dot] com`

This way, I could easily send someone to, say, my LinkedIn profile with the following easy to remember url: `https://linkedin.vsanthanam.com`

I wanted to make a visual representation of my online identities and projects, so I built this this simple React.js app that allows a user to easily find exactly what they're looking for.

check it out at `launchpad [dot] vsanthanam [dot] com`.

 * this project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), and is hosted on [firebase](https://firebase.google.com).
 * additional cra scripts from [custom-react-scripts](https://www.npmjs.com/package/custom-react-scripts)
 * CSS preprocessing with [LESS](https://lesscss.org)
 * JavaScript static type checking with [flow](https://www.flow.org)
 * CI with [Travis-CI](https://travis-ci.org)

 ## run it locally

 * make sure you've got node and npm installed on your machine
 * clone the repo and run `yarn install`
 * `yarn start-stage` launches the app and connects it to a pre-production firebase instance.
 * `yarn start` launches the app and connects it to a production firebase instance.
 * `yarn test` runs unit tests with Jest
 * `yarn stage` deploys the app to a pre-production firebase instance, configured to use the pre-production db on that instance.
 * `yarn deploy` deploys the app to whatever firebase environment is in use, configured to use the production db. You can control that setup with `firebase use [environment]`. You can add environments with `firebase use --add`
 
 ## CI

[![Build Status](https://travis-ci.org/vsanthanam/vslaunchpad.svg?branch=master)](https://travis-ci.org/vsanthanam/vslaunchpad)
