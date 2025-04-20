import { useState } from "react";
import { signUp } from "../services/auth";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await signUp(email, password, name);
    if (!error) {
      console.log("Erreur lors de l'inscription");
    }
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[25%]">
        <FaArrowLeft
          className="cursor-pointer w-5 h-5"
          onClick={() => handleBackHome()}
        />
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
        <button type="submit" className="bg-[#FFBA00] text-white p-2 rounded">
          S'inscrire
        </button>
        <p className="flex gap-x-1">
          Déja un compte ?
          <Link to={"/login"} className="text-[#FFBA00]">
            Se connecter
          </Link>
        </p>
      </form>
    </>
  );
}
