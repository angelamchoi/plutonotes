# Plutonotes

Plutonotes is a web application that allows you to create notes and post your notes publicly for anyone to see. This application was created for General Assembly's Software Engineering Immersive (SEI) Program.

## Inspiration 
This is my first time taking an online course. As an online student, I wanted to build an application where students are able to not only keep their notes in one place, but also see how other students are taking their notes. The purpose of the application is to allow students to learn and share their knowledge with the world. 

## Technologies Used
- Node.JS
- Express
- MongoDB
- Mongoose
- Materialize CSS
- Oauth
- Deployment on Heroku

## Getting Started
To access the application here: [https://plutonotes.herokuapp.com/home]

In the command line, type the following instructions:
1.' install npm`
2. Run `npm dev start`


## Next Steps 
The follow are the next steps in improving my application:

- incorporating Markdown format
- add comments and ratings on public notes section
- bookmark favorite notes
- collaboration like google docs
- text-speech option 
- add text editor API for more options for users when taking notes
- include additional logins such as github
- organize my file structure for views folder
	
## Development Process
1. Project Requirements
2. User Stories
3. Wireframes
4. Entity Relationship Diagram
5. Reflection / Difficulties Faced

### 1. Project Requirements
-Have at least 2 data entities. One entity that represents the main functional idea for your app and another with a 1:M or M:M relationship with that main entity (embedded or referenced).

- Have full-CRUD data operations somewhere within the app's features. For example, you can have functionality that Creates & Updates a post and satisfy Delete functionality by implementing the ability to delete comments.

- Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, it should have a consistent and polished user interface.

- Be deployed online (Heroku).

### 2. User Stories
- User Stories (trello)
    - this helped me visualize what I am working towards as well as understand how a user will be navigating through my applicatioon

### 3. Wireframes

### 4. Entity Relationship Diagram

### 5. Reflection / Diffculties Faced
The back-end is behind the scene executing its job. It is an area that users don't interact with, but it connects everything together to make an application work. 

Things I enjoyed:
- Working with Node.js 
    - After completing this project, Node.js is incredibly smart and powerful and can do so much! I love how all my pages connected with one another.
- Building a user-centric application
    - I liked that I had to think about the user for each page I was creating and what I want to show and what the user should be doing
- Writing Mongoose queries
    -I liked that you can narrow your search by using queries. There is a query for for finding one specific item like `find` or if you want to execute `findAndUpdate`
- Implementing OAuth
    - I feel like as an aspiring developer, it is my responsibility to create a safe environment for all users, namely, private information like passwords. I enjoyed implementing OAuth into my application. 

Difficulties faced
- Routing
    - Making sure the path and URL is consistent throughout all my pages 
    - 404 for days

- Delete  
- Update functions
    - find and update takes in 2 parameters (1. what you want to find 2. update it)
- although it was diffcult, these were my favorite functions


Lessons Learned
- Organization & Work flow
    - write down steps in my notebook 
- Keep it simple
    - I focused my attention on making sure I implemented the important functionalities such as create, edit, view, and delete before adding more features to my application. Therefore, my markdown format was on bottom of my list.
- Look at the URL for routing issues
-`Console.log` to make sure if your function is working
    - my favorite `console.log` is `I LOVE PIZZAAAA!!!` (all caps)
- Substance over style
- Read the documentation!
    - Whether it is connecting to an API, incoporating CSS framework, or writing mongoose queries, reading the documentation will help you navigate how to use the language. 

