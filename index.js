// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What would you like to name your application?',

  },
  {
    type: 'input',
    name: 'description',
    message: 'Briefly describe what your app does.'
  },
  {
    type: 'input',
    name: 'installInstructions',
    message: 'Please list instructions on how to install.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter any usage '
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license do you want?',
    choices: ['MIT', 'Apache', 'name']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile('README.md', generateMarkdown(response))
  })
}

// Function call to initialize app
init();
// inquirer.prompt(questions).then((answers) => {
//   // console.log(JSON.stringify(answers));
//   console.log(answers);
//   // console.log(answers.appName);
// });




// ***PIZZA INQUIRER NPM START***
/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

//  'use strict';
//  var inquirer = require('inquirer');

//  console.log('Hi, welcome to Node Pizza');

//  var questions = [
//    {
//      type: 'confirm',
//      name: 'toBeDelivered',
//      message: 'Is this for delivery?',
//      default: false,
//    },
//    {
//      type: 'input',
//      name: 'phone',
//      message: "What's your phone number?",
//      validate: function (value) {
//        var pass = value.match(
//          /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//        );
//        if (pass) {
//          return true;
//        }

//        return 'Please enter a valid phone number';
//      },
//    },
//    {
//      type: 'list',
//      name: 'size',
//      message: 'What size do you need?',
//      choices: ['Large', 'Medium', 'Small'],
//      filter: function (val) {
//        return val.toLowerCase();
//      },
//    },
//    {
//      type: 'input',
//      name: 'quantity',
//      message: 'How many do you need?',
//      validate: function (value) {
//        var valid = !isNaN(parseFloat(value));
//        return valid || 'Please enter a number';
//      },
//      filter: Number,
//    },
//    {
//      type: 'expand',
//      name: 'toppings',
//      message: 'What about the toppings?',
//      choices: [
//        {
//          key: 'p',
//          name: 'Pepperoni and cheese',
//          value: 'PepperoniCheese',
//        },
//        {
//          key: 'a',
//          name: 'All dressed',
//          value: 'alldressed',
//        },
//        {
//          key: 'w',
//          name: 'Hawaiian',
//          value: 'hawaiian',
//        },
//      ],
//    },
//    {
//      type: 'rawlist',
//      name: 'beverage',
//      message: 'You also get a free 2L beverage',
//      choices: ['Pepsi', '7up', 'Coke'],
//    },
//    {
//      type: 'input',
//      name: 'comments',
//      message: 'Any comments on your purchase experience?',
//      default: 'Nope, all good!',
//    },
//    {
//      type: 'list',
//      name: 'prize',
//      message: 'For leaving a comment, you get a freebie',
//      choices: ['cake', 'fries'],
//      when: function (answers) {
//        return answers.comments !== 'Nope, all good!';
//      },
//    },
//  ];

//  inquirer.prompt(questions).then((answers) => {
//    console.log('\nOrder receipt:');
//    console.log(JSON.stringify(answers, null, '  '));
//  });