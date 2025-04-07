import { useState } from "react";
import { signUp } from "../services/auth";
import { Link, useNavigate } from "react-router";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await signUp(email, password, name);
    if (!error) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-gray-800 ">
        S'enregistrer
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
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
          S'inscrire
        </button>
        <p className="flex gap-x-1">
          Déja un compte ?<Link to={"/login"}>Se connecter</Link>
        </p>
      </form>
    </>
  );
}
