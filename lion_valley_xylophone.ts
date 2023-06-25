// FILE 1
// index.ts
// create function to render fitness app page
function renderFitnessAppPage() {
  // get HTML content from fitness app page
  let pageContent = `
  <html>
    <head>
      <title>Fitness App</title>
    </head>
    <body>
      <h1>Welcome to the Fitness App!</h1>
      <div>
        <p>This app helps people stay fit and healthy by providing personalized daily workout routines.</p>
        <button id="start-btn">Start</button>
      </div>
    </body>
  </html>
  `
  // write HTML content to page
  document.write(pageContent);

  // add event listener to start button
  let startBtn = document.getElementById('start-btn')
  startBtn.addEventListener('click', startApp);
}

// call renderFitnessAppPage() to display page
renderFitnessAppPage();

// FILE 2
// fitnessApp.ts

//import type definitions
import { WorkoutRoutine, Exercise } from './types';

// create function to start app
function startApp() {
  // get user's current fitness level
  let currentFitnessLevel = getFitnessLevel();

  // fetch workout routine from API
  let workoutRoutine = fetchWorkoutRoutine(currentFitnessLevel);

  // render workout routine page
  renderWorkoutRoutinePage(workoutRoutine);
}

// helper function to get user's current fitness level
function getFitnessLevel() {
  // code to get user's current fitness level
  return 'Beginner';
}

// helper function to fetch workout routine from API
function fetchWorkoutRoutine(fitnessLevel: string) {
  // code to fetch workout routine from API
  let workoutRoutine: WorkoutRoutine = {
    name: '3-day beginner routine',
    exercises: [
      {
        name: 'Push-ups',
        sets: '3',
        reps: '12'
      },
      {
        name: 'Squats',
        sets: '3',
        reps: '15'
      },
      {
        name: 'Jumping jacks',
        sets: '3',
        reps: '20'
      },
      {
        name: 'Plank',
        sets: '3',
        reps: '30 seconds'
      }
    ]
  };
  return workoutRoutine;
}

// helper function to render workout routine page
function renderWorkoutRoutinePage(workoutRoutine: WorkoutRoutine) {
  // get HTML content for page
  let pageContent = `
  <html>
    <head>
      <title>Workout Routine</title>
    </head>
    <body>
      <h1>${workoutRoutine.name}</h1>
      <div>
        <ul>`
  // loop through exercises in workout routine
  workoutRoutine.exercises.forEach((exercise: Exercise) => {
    pageContent += `
          <li>
            <p>${exercise.name}: ${exercise.sets} sets of ${exercise.reps}</p>
          </li>`
  });

  pageContent += `
        </ul>
      </div>
    </body>
  </html>
  `
  // write HTML content to page
  document.write(pageContent);
}