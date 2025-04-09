import { useEffect, useState } from "react";
import { logout } from "../services/auth";
import useAuthSession from "../hooks/useAuthSession";

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null;
}

export default function UserCard() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { data, isPending, error } = useAuthSession();

  useEffect(() => {
    if (user) {
      console.log("User set!");
    }
    if (!user) {
      console.log("User null");
    }
    setUser(data?.user);
  }, [data, user]);

  if (isPending) return <div>Chargement...</div>;

  if (error) return <div>Error : {error.message}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <img
          src={user?.image || "/default-avatar.png"}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-4">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>

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
