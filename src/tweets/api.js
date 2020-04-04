import { database } from '../firebase';

export default {
  add: tweet => database.collection('tweets').add(tweet),
  remove: id =>
    database
      .collection('tweets')
      .doc(id)
      .delete(),
  onChange: callback =>
    database
      .collection('tweets')
      .onSnapshot(snapshot =>
        callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      )
};
