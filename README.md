# TODO-List

This is a completely open-source todolist. It was created for a subject at the Norwegian University of Agder, where the goal was creating something with only open-source components. The application uses React for frontend, with node and express making out the backend, together with a Postgresql database. Our goal is to make this application easy for anyone else to build on, something we will accomplish by both making it easily accessable through this github page, with tutorials on how new users can both use, and contribute to the project.

## Prerequisites

If you have your own backend you are ofcourse free to use that, but for simplicity we have also chosen to include an example in this repository. This may be subject to change if the project grows, where we would then make the entire repo about the frontend and rather make a seperate page for the backend. Since these two are supposed to be independant of eachother we have chosen to also write two seperate guides on how they work, and how to get started with them. There are however some things that you will need for both applications, regardless of which one you choose to work with.

These are [Git](https://git-scm.com/downloads) which handles everything related to the exchange and improvement of code and ideas,
and Node.js which is used for both our front- and backend applications. Read more about node [here](https://nodejs.org/)

If you want to contribute to the project this can be done by both trying it out and giving constructive feedback, or just simply making pull requests suggesting improvements. To be able to accomplish either one you need to build the project locally on your computer. This is quite an easy process. All you need to do is have the previously mentioned Git and Node installed. Once that is done you can proceed.

To ensure good quality there are some precautions that we take when it comes to others contributing. As of now, every pull request must be accepted by at least two members of our original little team. This will of course change in the future if we get some good, "outside" collaborators, but that is the way it is now. If there are things that could be improved in the pull-request, then these have to be fixed before you do another one.

Once a pull-request is accepted the new feature will live on the experimental branch. Here we will do more testing and possible polishing, before moving it on to the development branch where most of the decent, working code will be located. The master branch will only be used to store things we consider "release" ready.

If you want to learn more about the React frontend application then you can visit [frontend](https://github.com/EliasBN/todo/blob/elias/guides/frontend.md)

If you want to learn more about the Node.js and express application then you can visit [backend](https://github.com/EliasBN/todo/blob/elias/guides/backend.md)
