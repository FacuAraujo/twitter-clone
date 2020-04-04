import { auth, providers } from '../firebase';

// prettier-ignore
export default {
  signInGoogle: () => auth.signInWithPopup(providers.google),
  signInEmail: (email, password) => auth.signInWithEmailAndPassword(email, password),
  createEmail: (email, password) => auth.createUserWithEmailAndPassword(email, password),
  signOut: () => auth.signOut(),
  onChange: callback => auth.onAuthStateChanged(callback),
  getUser: () => auth.currentUser
};
