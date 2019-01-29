# CurlFriend Back-End Repository

This is the back end for our NorthCoders final group project, named CurlFriend. The application created serves a MongoDB database for the project, a mobile fitness app. 

## Getting Started

To get the project up and running on your own system, clone and download the repo from GitHub using the provided links. ```cd``` into the downloaded folder and open using your preferred code editor.

### Prerequisites

All relevant dependencies can be installed using the two commands ```npm install``` and ```npm install -dev```

### Installing

Once all dependencies have been installed, the development environment can be started with the command ```npm run dev```. This should open a browser window automatically, if it does not the application can be accessed on ```localhost:9000/api```.
The command ```npm run seed:dev``` will reseed the database for development purposes.

### Testing

Testing can be run with the command ```npm test```. These utilise the Mocha testing framework and Chai assertion library to test all functional endpoints and also to ensure all errors are handled appropiately.

### Deployment

The application is hosted on Heroku, and can be accessed at ```https://nc-project-be.herokuapp.com/api/```.

## Built With

*[MongoDB](https://www.mongodb.com/) - The Cloud Database used.
*[Express](https://expressjs.com/) - Web Framework to manage HTTP requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



