const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-8">
      <h1 className="text-center text-4xl font-thin">Registreren</h1>

      <form className="p-4 flex flex-col gap-4">
        <label htmlFor="name" className="font-thin text-sm">
          Naam
        </label>
        <input
          type="text"
          className="block border px-4 py-2 rounded-lg w-full"
          placeholder="John Doe"
          id="name"
        />
        <label htmlFor="email" className="font-thin text-sm">
          Email
        </label>
        <input
          type="text"
          className="block border px-4 py-2 rounded-lg w-full"
          placeholder="test@hogent.be"
          id="email"
        />
        <label htmlFor="password" className="font-thin text-sm">
          Wachtwoord
        </label>
        <input
          type="password"
          className="block border px-4 py-2 rounded-lg w-full"
          id="password"
          placeholder="*****"
        />
        <label htmlFor="confirmPassword" className="font-thin text-sm">
          Wachtwoord bevestiging
        </label>
        <input
          type="password"
          className="block border px-4 py-2 rounded-lg w-full"
          id="confirmPassword"
          placeholder="*****"
        />
        <button
          type="submit"
          className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-sky-800">
          Registreren
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
