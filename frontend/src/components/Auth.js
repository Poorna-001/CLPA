import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const Auth = () => {
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    console.log("User:", auth.currentUser);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
};

export default Auth;
