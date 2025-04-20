import RegisterForm from "../components/RegisterForm.tsx";

function Register() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-1/3 bg-[#0C3B2E] items-center justify-center">
        <h1 className="text-white">Inscription</h1>
      </div>
      <div className="flex flex-2/3 items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
