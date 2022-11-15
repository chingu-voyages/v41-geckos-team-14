# Geckos 14 To-Do-App

This app was created by geckos team 14 for the Chingu Voyage 41. It is a to-do-list app in which you can add, edit and delete tasks.

**LIVE LINK: https://chingu-voyages.github.io/v41-geckos-team-14/**

## Features

- Logging in correctly at the login page allows you to go to the kanban dashboard or to the to-do-list app. (The correct user name is at the moment "string" and the correct password is also "string".)
- In the to-do-app, you can add new tasks, update tasks by editing them or delete them.
- Use the kanban dashboard to drag and drop some given tasks.

## Project explanation

Our group started out with the plan to make a project management app with the feature of making, editing and deleting to-do items as one of its core functionalities. Most developers of the group signed up to be in a tier 2 (Geckos) team, aiming to do a project centered around the React library. All were front end developers without any back end experience. However, one of our team members had originally signed up for a tier 3 (Bears) team project and was accidentally assigned to our tier 2 group.

So our team decided that we will make the best of the situation and try to use this as a learning chance. The original plan was to build a simple to-do list app, with maybe also a kanban board - a log in and sign up page were rather a "nice to have" feature. We added the log in page and the sign up page as "should have" features so that our tier 3 group member could get the chance to develop an API that we could potentially use as the backend for the application.

During our work with the API, it proved to be more difficult to connect the different pages with the backend than we thought. The login page makes a successful post call to the API and uses the answer to change the UI (displaying or hiding buttons that lead to the kanban board or the to-do list app). The other pages (sign up, kanban dashboard, to-do app) aren't connected to the API yet.

The planned core functionality of the project (managing to-do-lists) works fine and the user can even drag and drop some hard coded tasks on the kanban board. We wanted to involve the API calls more than we did, but everyone learned valuable lessons from this project. We dared to leave our comfort zones and grew a lot, especially as a team.

## Tech used / Dependencies

- [React.js](https://reactjs.org/)
- Our project was ootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Icons from [Font awesome](https://fontawesome.com/)
- Background image taken from [Figma](https://www.figma.com/)
- [API](https://todoapi.fly.dev/api-docs/index.html) coded by [@Cerdtruir](https://github.com/Cerdtruir). The API is hosted on [Fly.io](https://fly.io/).

## Development mode

In the project directory, run `npm start` in the terminal to start the app in development mode.
Go to [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contributors

- [@ellrub](https://github.com/ellrub)
- [@DanielaKuester](https://github.com/DanielaKuester)
- [@hemahafez01](https://github.com/hemahafez01)
- [@frugalcodes](https://github.com/frugalcodes)
- [@Cerdtruir](https://github.com/Cerdtruir)

## Contributing

This repository is a Chingu Voyage Project exclusive to the Team "Geckos 14". Therefore, we will most likely not accept pull requests.