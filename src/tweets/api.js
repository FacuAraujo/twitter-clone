import firebase, { database } from '../firebase';

export default {
  add: (tweet) => database.collection('tweets').add(tweet),
  remove: (id) => database.collection('tweets').doc(id).delete(),
  addLike: (tweetId, uid) =>
    database
      .collection('tweets')
      .doc(tweetId)
      .update({ likes: firebase.firestore.FieldValue.arrayUnion(uid) }),
  removeLike: (tweetId, uid) =>
    database
      .collection('tweets')
      .doc(tweetId)
      .update({ likes: firebase.firestore.FieldValue.arrayRemove(uid) }),
  onChange: (callback) =>
    database
      .collection('tweets')
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
};
