const { expect } = require('chai');
const supertest = require('supertest');
const firebase = require('firebase');
const app = require('../app');

const request = supertest(app);

describe('/api', () => {
  const ref = firebase.database().ref('onlineState');
  ref.onDisconnect().cancel();
  describe('/exercises/:exercise_id', () => {
    it(' GET - 200 & returns the exercise when provided with the correct id', () => request.get('/api/exercises/pull-up')
      .expect(200)
      .then((res) => {
        expect(res.body.exerciseData).to.have.property('exercise_name');
        expect(res.body.exerciseData.exercise_name).to.equal('pull up');
      }));
  });
  describe('/users/:user_id', () => {
    it('GET - 200 & returns specified user when provided with username', () => request.get('/api/users/charlie')
      .expect(200)
      .then((res) => {
        expect(res.body.userData).to.have.property('username', 'charli');
        expect(res.body.userData.name).to.equal('charlie');
      }));
    describe('/workouts', () => {
      it('gets all workouts of the username', () => request.get('/api/users/charlie/workouts')
        .expect(200)
        .then((res) => {
          expect(res.body.workouts).to.have.length(3);
        }));
    });
  });
  describe('/workouts', () => {
    it('GET - 200 & gets all workouts', () => request.get('/api/workouts')
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.length(3);
      }));
    it('POST - 201 and a confirmation message', () => {
      const workout = {
        created_by: 'Lovelace',
        private: true,
        workout_name: 'new_workout',
      };
      return request.post('/api/workouts')
        .expect(201)
        .send(workout)
        .then((res) => {
          expect(res.body).to.have.keys('msg');
        });
    });
    describe('/:workout_id', () => {
      it('GET - 200 & returns specified workout when provided with workout name', () => request.get('/api/workouts/new_workout')
        .expect(200)
        .then((res) => {
          expect(res.body.workoutData).to.have.property('created_by');
          expect(res.body.workoutData.workout_name).to.equal('new_workout');
          expect(res.body.workoutData.created_by).to.equal('me');
        }));
      it('DELETE 204 and responds with a delete successful message', () => {
        return request.delete('/api/workouts/new_workout')
          .expect(204)
          .then((res) => {
            expect(res.body.msg).to.equal('successful deletion');
          });
      });
    });
  });
  describe('/muscles/:muscle', () => {
    it('GET - 200 & returns the muscle name and description', () => request.get('/api/muscles/chest')
      .expect(200)
      .then((res) => {
        expect(res.body.muscleData.muscle_name).to.equal('chest');
      }));
  });
  describe('/exercises', () => {
    it('GET - 200 and returns all exercises', () => {
      return request.get('/api/exercises')
        .expect(200)
        .then((res) => {
          expect(res.body).to.have.length(10);
          expect(res.body.exercises[0]).to.have.property('major_muscle');
        });
    });
  });
});
