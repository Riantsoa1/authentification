import type { NextApiRequest, NextApiResponse } from "next";
import { adminAuth } from "../firebaseAdmin";

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token manquant" });
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    console.log("Utilisateur vérifié :", decodedToken);
    return res.status(200).json({ message: "Accès autorisé" });
  } catch (error) {
    console.error("Erreur de vérification :", error);
    return res.status(403).json({ error: "Accès refusé" });
  }
}
