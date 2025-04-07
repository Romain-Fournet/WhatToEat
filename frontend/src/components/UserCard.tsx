import { useEffect, useState } from "react";
import { getUser, logout } from "../services/auth";

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

  useEffect(() => {
    getUser().then((data) => {
      if (data?.user) setUser(data.user);
    });
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Chargement...</p>
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
