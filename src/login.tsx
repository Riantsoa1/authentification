'use client'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseconfig";

const LoginPage: React.FC = () => {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Utilisateur connecté :", userCredential.user);
    } catch (error: any) {
      console.error("Erreur de connexion :", error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginPage;
