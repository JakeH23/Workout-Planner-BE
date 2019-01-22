const ENVIRONMENT = process.env.NODE_ENV || 'development';

const config = {
  test: {
    DB_URL: 'mongodb://localhost:27017/workout_planner_test',
    database: 'workout_planner_test',
  },
  development: {
    DB_URL: 'mongodb://localhost:27017/workout_planner',
    database: 'workout_planner',
  },
  production: {
    DB_URL: '',
  },
};

module.exports = config[ENVIRONMENT];
