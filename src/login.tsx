'use client'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseconfig";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Utilisateur connecté :", userCredential.user);
      router.push("/dashboard");

    } catch (error: unknown) {
        if (error instanceof Error){
            console.error("Erreur de connexion :", error.message);
        } else {
            console.error("Erreur de connexion inconnue");
        }
      
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
