const db = require('../init');

const docRef = db.collection('cities').doc('SF');

exports.serveTestData = (req, res, next) => {
  docRef.get().then((doc) => {
    if (doc.exists) {
      console.log('Document data:', doc.data());
    } else {
    // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }).catch((error) => {
    console.log('Error getting document:', error);
  });
};
