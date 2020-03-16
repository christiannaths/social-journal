const path = require('path');
const config = require('config');
const admin = require('firebase-admin');
const serviceAccount = require(path.resolve(
  __dirname,
  '../../../',
  config.get('firebase').serviceAccount,
));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
