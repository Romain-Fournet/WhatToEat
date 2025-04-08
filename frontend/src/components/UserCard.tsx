import { useEffect, useState } from "react";
import { logout } from "../services/auth";
import { authClient } from "../services/auth-client";

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null | undefined | undefined;
}

export default function UserCard() {
  const [user, setUser] = useState<User | null>(null);

  const {
    data: session,
    isPending, // loading state
    error, // error object
  } = authClient.useSession();

  // Mettre à jour l'état de l'utilisateur une fois la session chargée
  useEffect(() => {
    if (!isPending && session) {
      setUser(session.user);
    }
  }, [session, isPending]); // Ce useEffect sera déclenché à chaque fois que `session` ou `isPending` change.

  // Afficher un message de chargement si la session est en cours de récupération
  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Chargement...</p>
      </div>
    );
  }

  // Afficher un message d'erreur si une erreur se produit
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Erreur : {error.message}</p>
      </div>
    );
  }

  // Afficher un message si l'utilisateur n'est pas trouvé
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Utilisateur non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <img
          src={user.image || "/default-avatar.png"}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>

        <button
          onClick={logout}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
