import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue 👋</h1>
        <p className="text-gray-600 mb-8">
          Commencez votre aventure dès maintenant
        </p>

        <div className="flex flex-col gap-4">
          <Link to="/login">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg hover:bg-indigo-700 transition">
              Se connecter
            </button>
          </Link>

          <Link to="/register">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg hover:bg-indigo-700 transition">
              Créer un compte
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
