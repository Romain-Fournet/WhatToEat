import { useState } from "react";
import { signIn } from "../services/auth";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await signIn(email, password);
    if (!error && data?.user.emailVerified) {
      navigate("/");
    } else if (data?.user.emailVerified) {
      console.log("Email pas verifié");
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
          Se connecter
        </button>
        <p className="flex gap-x-1">
          Pas de compte ?
          <Link to={"/register"} className="text-[#FFBA00]">
            En créer un !
          </Link>
        </p>
      </form>
    </>
  );
}
