# Building a client-side application with React-Redux

## Objectives

1.  Demonstrate mastery of material in this course
2.  Push yourself — integrate with a new API!

## Woo!

You made it! All of your hard work and long hours have lead you here... to this moment... a moment of glory! You've earned every gym badge, defeated every boss, wrestled with your inner daemons (heh) to ultimately lead you to this.

![Jim Carrey Celebrating New Years](http://i.makeagif.com/media/9-04-2015/f4fAal.gif)

## Your final assessment

This lesson covers your final assignment. It is supposed to be your magnum opus — a culmination of
all the skills you've learned so far. It's going to be a tough one, but you'll make it through.

## Overview

This assignment is open-ended when it comes to the actual content. You are free to create
whatever you'd like, as long as it incorporates most of what you've learned in this course. If
you don't have any inspiration at the moment, here are a couple of ideas:

- Twitter client
- Imgur browsing app
- Reddit feed
- Airbnb clone
- Crossword puzzle
- A simple board game

## Requirements

- The code should be written in ES6 as much as possible
- Use the `create-react-app` generator to start your project. - Follow the instructions on this repo to setup the generator: [create-react-app](https://github.com/facebookincubator/create-react-app)
- Your app should have one HTML page to render your react-redux application
- There should be 2 container components
- There should be 5 stateless components
- There should be 3 routes
- The Application must make use of `react-router` and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate [docs](https://github.com/ReactTraining/react-router/tree/v3/docs); docs for v4 can be found [here](https://reacttraining.com/react-router/web/guides/quick-start))
- Use Redux middleware to respond to and modify state change
- Make use of async actions to send data to and receive data from a server
- Your Rails API should handle the data persistence. You should be using `fetch()` within your actions to GET and POST data from your API - do not use
  jQuery methods.
- Your client-side application should handle the display of data with minimal data manipulation
- Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
- [Once your app is complete, fill out this checklist.](https://goo.gl/forms/ULtKsxuzWomvXuTk2)

Go wild! These are only the basic requirements — you're free to add on as much stuff as you'd like.

## Hooking up a Rails API backend

Use this blog to hook up a React-Redux frontend to your rails API backend: [Setup Rails API with React](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/)

## Assessment

### Be prepared to

1.  Explain your code. You might be asked why you chose to solve things a certain way, or why you
    chose a certain library or code structure.
2.  Refactor/reorganize your code.
3.  Build out extra basic functionality.

### What to expect from the pairing session

Your final project review is a comprehensive review that can cover all the topics that you have covered in the Learn.co curriculum. We will be asking the majority of questions about the final section, but don't be surprised if your interviewer asks questions about earlier topics. Like earlier reviews, we really do want you to succeed, and we'll work with you as many times as necessary to get you through the review if you don't nail it the first time (which is quite common and completely OK). However, we will potentially give you a hard time, cut you off, push you on your use of vocabulary and/or your coding choices. We want to try to give you a sense of what a coding interview might be like, so you build the confidence to describe your app and to write code even in a higher pressure, slightly more adversarial environment.

# Container Components

So what is a container component? The main thing to keep in mind here is that
container components and presentational components go together. In fact, you can
think of them as part of the same design pattern. Where presentational
components don't manage state, container components do. Where presentation
components are usually subordinate "children" in a component hierarchy,
container components are in almost every case the "parents" of presentational
components.

Here's a concise definition of the container component pattern:

- Container components are primarily concerned with _how things work_

- They rarely have any HTML markup of their own, aside from a wrapping `<div>`;

- They are often stateful

- They are responsible for providing data and behavior to their children (usually
  presentational components).
