import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-1/3 bg-[#0C3B2E] items-center justify-center">
        <h1 className="text-white">Connexion</h1>
      </div>
      <div className="flex flex-2/3 items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
