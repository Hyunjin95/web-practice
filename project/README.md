# Smart-Brain Project - Front-End
This project is now running on https://smartbrain-hyunjin.herokuapp.com, hosted by heroku.

To see the server side code, check https://github.com/Hyunjin95/web-practice/tree/master/project_backend.

# How to deploy this app to Heroku
To deploy a subdirectory to Heroku, you have to run the following:

`git subtree push --prefix YOUR_PROJECT HEROKU_REMOTE master`

So this project might be deployed by running (assuming HEROKU_REMOTE == heroku_fe):

`git subtree push ---prefix project heroku_fe master`
