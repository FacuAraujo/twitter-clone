import { auth, providers } from '../firebase';

// prettier-ignore
export default {
  signInGoogle: () => auth.signInWithPopup(providers.google),
  signInEmail: (email, password) => auth.createUserWithEmailAndPassword(email, password),
  createEmail: (email, password, name) => auth.createUserWithEmailAndPassword(email, password),
  signOut: () => auth.signOut(),
  onChange: callback => auth.onAuthStateChanged(callback)
};
