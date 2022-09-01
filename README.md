# SHIFT SOFTWARE ENGINEER INTERVIEW PROJECT
### Why this project
The Shift Software Engineer role requires the technical ability to read existing code, add and update features, and write tests, but also leans heavily on a candidate's ability to translate tickets into functionality and communicate with all parties/departments involved in feature sign off and deployment. This project is designed to test all of these skills and will be evaluated in a cross-departmental panel interview with members of the engineering, product, and design teams.

### About the repo
For this project, you are provided a basic React application built with NextJS (https://nextjs.org/). You will find a small set of components in the `src` folder and a single page in the `pages` folder (index.js in pages is the only page, and also the root route). This is a scaled down version of Shift's stack, which is also built on NextJS.

Other things of note:
- There is no API for this project, instead, static data comes from `candidates.json` as an API mock.

- Some additional NextJS documentation can be found in `NEXTJS.md`, you can refer to their documentation for more information about the library as needed.

- In the `TICKET.md` file, you will find an example feature ticket that is similar to tickets Shift engineering receives from the product team. 

### Testing in the repo
The test framework included in this example repo is Jest with React Testing Library. Tests are held in folders called `__tests__` and tests are run with `yarn test`. 

### Project instructions and requirements

Read the `TICKET.md` file to understand the feature task and its acceptance criteria. 

- write down any questions you would ask for further clarification on the ticket/feature requirements or project in general.
- add the components and code you think are necessary to implement the feature. Be intentional about your componenets and be prepared to explain why you chose the approach you did.
- write the test scenarios you think are necessary to cover the feature acceptance criteria (these can be added in a text or md file included in the project).
- (optional) write jest tests for the test scenarios you already identified. If you want to follow TDD flow, tell us about how you did that.
- (optional) use Material UI for styles and UI components. This will require adding additional packages to the repo


### About the Interview
The interview will be conversational with time for you to ask any questions, walk us through your process, and explain things like:
- why you chose the components/approach/logic you did
- where any unknown or areas for further discussion came up
- how you would go about writing automated tests

During the interview you will be able to share your screen to walk us through any code or text files, you can also put your fork of the repo up on github and share the link with us. 
