process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const seedDB = require('../db/seed');
const {
  muscles,
  users,
  exercises,
  workouts,
  completedWorkouts,
} = require('../db/testData/index');
const {
  musclesDocs,
  usersDocs,
  exercisesDocs,
  workoutDocs,
  completedWorkoutsDocs,
} = require('../db/seed');

const request = supertest(app);

describe('/api', () => {
  let musclesDocs;
  let usersDocs;
  let exercisesDocs;
  let workoutDocs;
  let completedWorkoutsDocs;
  beforeEach(() => seedDB({
    muscles,
    users,
    exercises,
    workouts,
    completedWorkouts,
  }).then((docs) => {
    console.log('seeded fresh database');
    musclesDocs = docs[0];
    usersDocs = docs[1];
    exercisesDocs = docs[2];
    workoutsDocs = docs[3];
    completedWorkoutsDocs = docs[4];
  }));
  it('returns 404 for a get request on a url that doesnt exist', () => request
    .get('/testing')
    .expect(404)
    .then((res) => {
      expect(res.body.msg).to.equal('Page not found');
    }));
  describe('/users', () => {
    it('GET - 200 and returns all users', () => request
      .get('/api/users')
      .expect(200)
      .then((res) => {
        expect(res.body.users).to.have.length(3);
        expect(res.body.users[0]).to.have.property('user_name');
      }));
    describe('/:username', () => {
      it('GET - 200 & returns specified user when provided with username', () => request
        .get('/api/users/charlie')
        .expect(200)
        .then((res) => {
          expect(res.body.user).to.have.property('user_name', 'charlie');
          expect(res.body.user.user_name).to.equal('charlie');
        }));
      describe('/workouts', () => {
        it('gets all workouts of the username', () => request
          .get('/api/users/charlie/workouts')
          .expect(200)
          .then((res) => {
            expect(res.body.workouts).to.have.length(3);
          }));
      });
    });
  });
  describe('/workouts', () => {
    it('GET - 200 & gets all workouts', () => request
      .get('/api/workouts')
      .expect(200)
      .then((res) => {
        expect(res.body.workouts).to.have.length(4);
      }));
    it('POST - 201 and a confirmation message', () => {
      const workout = {
        created_by: 'Lovelace',
        exercises: ['Squat', 'Lunge'],
        private: true,
        name: 'new_workout',
      };
      return request
        .post('/api/workouts')
        .expect(201)
        .send(workout)
        .then((res) => {
          expect(res.body).to.have.keys('msg');
        });
    });
    describe('/:workout_id', () => {
      it('GET - 200 & returns specified workout when provided with workout name', () => request
        .get('/api/workouts/new_workout')
        .expect(200)
        .then((res) => {
          expect(res.body.workoutData).to.have.property('created_by');
          expect(res.body.workoutData.workout_name).to.equal('new_workout');
          expect(res.body.workoutData.created_by).to.equal('me');
        }));
      it('DELETE 204 and responds with a delete successful message', () => request
        .delete('/api/workouts/new_workout')
        .expect(204)
        .then((res) => {
          expect(res.body.msg).to.equal('successful deletion');
        }));
    });
  });
  describe('/muscles', () => {
    it('GET - 200 & returns an array of all muscles', () => request
      .get('/api/muscles')
      .expect(200)
      .then((res) => {
        expect(res.body.muscles).to.have.length(10);
      }));
    describe('/:muscle', () => {
      it('GET - 200 & returns the muscle name and description', () => request
        .get('/api/muscles/Chest')
        .expect(200)
        .then((res) => {
          expect(res.body.muscle_name).to.equal('Chest');
        }));
    });
  });
  describe('/exercises', () => {
    it('GET - 200 and returns all exercises', () => request
      .get('/api/exercises')
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.length(10);
        expect(res.body.exercises[0]).to.have.property('major_muscle');
      }));
    it('POST - 201 and successfully adds an exercise to the database', () => {
      const newExercise = {
        name: 'Test-Exercise',
        major_muscle: 'Test_Muscle',
        minor_muscles: ['one', 'two'],
        description: ['this is a test exercise'],
        created_by: ['test_user'],
      };
      return request
        .post('/api/exercises')
        .expect(201)
        .send(newExercise)
        .then((res) => {
          expect(res.body.msg).to.equal('Exercise Added');
        });
    });
    describe('/:exercise_id', () => {
      it(' GET - 200 & returns the exercise when provided with the correct id', () => request.get('/api/exercises/Pull%20Up')
        .expect(200)
        .then((res) => {
          expect(res.body.exercise).to.have.property('content');
          expect(res.body.exercise.title).to.equal('Pull Up');
        }));
    });
    describe('/muscle/:major_muscle', () => {
      it('GET - 200 and returns the exercises of the major muscle group', () => request.get('/api/exercises/muscle/Chest')
        .expect(200)
        .then((res) => {
          expect(res.body.exerciseData).to.have.property('exercise_name');
          expect(res.body.exerciseData.exercise_name).to.equal('pull up');
        }));
    });
    describe.only('/user/:user_name', () => {
      it('GET - 200 and returns the exercises created by the user_id', () => {
        return request.get('/api/exercises/user/charlie/5c488fa936ee635b2d12daad')
          .expect(200)
          .then((res) => {
            expect(res.body.exercises).to.have.length(1);
          });
      });
    });
  });
  after(() => mongoose.disconnect());
});
