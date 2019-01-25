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
    DB_URL:
      'mongodb://newuser123:password1@ds229290.mlab.com:29290/workout_planner',
  },
};

module.exports = config[ENVIRONMENT];
