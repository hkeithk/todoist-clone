Design decisions:

1. First decided not to go with MUI but decided against it. I would prefer to spend more time working on functional parts of Js and React and not CSS/HTML.

2. I want to use a mix of styled-components and material-ui's built in styling (which is really similar), mostly so that I have access to alot of documentation that can help me build the application.

   -Styled components isnt great at managing the flow/positioning of the page so I'll stick with plain css with BEM methodology (learning it).
   -For my own reference:

   1. BEM- Block(standalone Entity that is meaningful)
   2. Element(part of a block that has no standalone meaning and semantically tied to block)
   3. Modifier(flag on a block or element, use to change appearance or behavior)

3. Using React Context instead of Redux, mostly because this is a simple App using firebase. If I built the entire todo-ist app with all its functionality I probably want to use relational db with Redux

High level plan:

Todo:

1.  create dropdown for the custom projects with a projects component that will map all the custom projects below

2.  create the add task button that goes under inbox, should have scheduler and projects button with default inbox

Done:

- Build the Appbar first, only functionality for now is "Quick Add task (top right)", Side drawer, and home button.
- Build the sidebar/ MUI drawer. Drawer should use List and ListItems and not tabs.
- Start with build the inbox, today and upcoming high level components separately, no need for task items yet, just layout
- Create the task component now, should have:
  - radio button, dont need to be exact, could change in future
  - Onclick should bring up a dialog with just the title, no subtasks but can have a section for comments. .
    - should have a button (dont need schedule component yet)

Nice to haves (future):

1. Subtasks? Would need to implement a collapsible component if there are subtasks
   - probably would store subtasks in an array of objects, or just an array of taskId's. This approach would mean I'd need to store all tasks with a hasSubTask value
1. Have a sort by date and sort by name functionality.
1. Implement the "Board view" that allows for drag and drop functionality.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
