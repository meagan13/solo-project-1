# VolunteerBrite
VolunteerBrite is an EventBrite clone app that allows users to access volunteer, education, and advocacy oporutnities, with a particular focus on nonprofits located in west Nashville, TN. VolunteerBrite was created using Sequelize, Express, React, and Redux.

https://soloproject13.herokuapp.com/

All users may:
* View available opportunities and their corresponding categories (volunteer, learn, or advocate)
* Navigate to a specific opportunity page
* Login
* Create an account
* Utilize a demo account
* Return to the home page to view all opportunities

Logged-in users may:
* Create opportunities
* Edit or delete opportunities they have created
* Sign up for opportunities
* View their profile, which includes all events for which they have registered

Logged in users can create, read, update, and delete opportunities, and find opportunities for which they have registered in their profile. 

# App Structure
## Backend
The VolunteerBrite backend was built using Express, JavaScript, Sequelize, and a postgreSQL database. Backend api routes followed ReSTful conventions

## Frontend
The frontend of VolunteerBrite was built using React and Redux to allow for efficient and timely rerendering.

# Features
## Navigation
The navigation bar remains at the top of the page even as users visit different areas of the website for easy access to the user's profile, opportunity creation, and logout options. The navigation bar also includes a link that will take the user directly to the home page.

## User Login and Signup
Users are able to register for an account, or they can log into an existing account. Certain features can only be accessed by users who are registered and logged in. VolunteerBrite uses Express-Validator and Bcryptjs to ensure that passwords are hashed before being stored in the database.

## Home Page
The home page displays all available opportunities, and each individual opportunity on the home page displays its category. 

## Individual Opportunity and Opportunity Signup Page
Each opportunity on the VolunteerBrite home page links to an individual opportunity page where logged-in users can signup for that opportunity. If the logged-in user created that opportunity, they will be authorized to edit or delete that opportunity, as well.

## Create an Opportunity Page
Logged-in users are authorized to create new opportunities. Opportunities can be hosted at any location listed in a drop-down list, and categorized as volunteer, learn, or advocate. The logged-in user can also set the name and capacity of the event they create.

## User Profile
Logged-in users may view their username, profile image, email address, and opportunity registrations in their profile page.

# Libraries
## Backend
* bcryptjs
* cookie-parser 
* CORS
* csurf 
* dotenv
* express - Express
* express-async-handler 
* express-validato
* faker
* helmet 
* jsonwebtoken 
* morgan 
* per-env 
* pg@">=8.4.1" - PostgresQL greater or equal to version 8.4.1
* sequelize@5 - Sequelize
* sequelize-cli@5 - use sequelize in the command line
* dev-dependencies:
  * dotenv-cli - use dotenv in the command line
  * nodemon - hot reload server backend files
  
## Frontend
* js-cookie
* react-redux
* react-router-dom
* redux
* redux-thunk
* dev-dependencies:
    * redux-logger
