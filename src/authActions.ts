import firebase from "firebase/app";


export const googleAuth = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const createUserWithEmailAndPassword = (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const logout = () => {
  return firebase.auth().signOut();
};
