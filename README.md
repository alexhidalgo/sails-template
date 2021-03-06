# Full stack javascript Sails template


a [Sails](http://sailsjs.org) application

#Date Modeling

## Users
-id: integer
-email: string
-password: string
-createdAt: date
-updatedAt: date
-loggedInAt: date
-firstName: string
-lastName: string

## Assignments => 'one to many' ##Submissions
-id: integer
-name: string
-dueAt: date
-createdAt: date
-updatedAt - date

![overview diagram](/development-heroku.jpg)

### 1. Install all of the necessary software

> You will only ever need to do these steps once.

1. From your terminal (any directory is fine) run `brew update`
2. If you haven't already installed node, do it now.
	1. Run `brew install node`
3. If you haven't already installed postgres, do it now.
	1. Run `brew install postgresql`
	2. Then run `ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents`
	3. Then run `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist`
4. Install sails `npm install -g sails forever`
5. Create a free account on Heroku. Be sure to pick node.js as your development language.
	* [Heroku sign up](https://signup.heroku.com/dc)
6. Go to [this link](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
7. Download and install the Heroku Toolbelt for Mac OS X

### 2. Set up your local development environment

> You will need to do all of these steps once for each new project.

1. Create a postgres database for your new application: `createdb appdb`
2. Create a postgres user for your new application: `createuser postgres`
3. Fork and then clone my [sails-template](https://github.com/TIY-Austin-Front-End-Engineering/sails-template) from GitHub.
4. Run `npm install` to install the back-end dependencies.
5. Run `bower install` to install the front-end dependencies.
6. To run your sails server type `forever -w start app.js`. This will restart the server any time there is a change to one of the server files.
	1. To stop the sails server type `forever stop app.js`
7. I recommend keeping the server output log open in its own terminal window: `forever logs app.js -f`
	1. To stop watching the log type `ctrl+c`
8. Open http://localhost:1337 in Chrome to make sure that the app is running properly

### 3. Set up your production environment

> You will need to do all of these steps once for each new project.

1. On the command line make sure that you are inside of your project directory and your project has a github repo (aka you have typed `git init` or cloned it from GitHub)
2. Run the command `heroku create` to create a new app on heroku. You may have to enter your heroku username and password.
3. Run `heroku addons:add heroku-postgresql` to create a database on heroku for your app.
4. Run `heroku config:set NODE_ENV=production` to set the environment variable to production.

### 4. Deploy to production

> You will need to do these steps each time you have changes on your development environment that you want to deploy to production (aka heroku).

1. **Stop your currently running sails server** by running `forever stopall`.
2. Run `grunt buildProd` to prepare all of your files for production.
3. `git add .` and `git commit -m "message"`. Be sure to include all of the .tmp files in your commit.
4. Run `git push heroku master`
5. This is usually a good time to push to github too: `git push origin master`

### 5. Shutting down your dev environment

> Sails can slow down your computer, so when you're not doing dev work you'll want to shut downt he server.

1. Run `foerver stopall`.
2. Type `ctrl+c` to quit out of any running logs.

