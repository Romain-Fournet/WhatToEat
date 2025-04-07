import { useState } from "react";
import { signIn } from "../services/auth";
import { Link, useNavigate } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (!error) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-gray-800">
        Se connecter
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Se connecter
        </button>
        <p className="flex gap-x-1">
          Pas de compte ?<Link to={"/register"}>En créer un !</Link>
        </p>
      </form>
    </>
  );
}
