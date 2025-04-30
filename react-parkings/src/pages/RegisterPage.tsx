import { useFormik } from "formik";
import { useEffect, useRef } from "react";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Naam is verplicht.")
    .min(2, "Moet minstens uit 2 karakters bestaan."),
  email: Yup.string()
    .required("Email is een verplicht veld.")
    .email("Geen geldig emailadres."),
  password: Yup.string()
    .required("Wachtwoord is een verplicht veld.")
    .min(8, "Moet minstens uit 8 karakters bestaan."),
  confirmPassword: Yup.string()
    .required("Wachtwoord bevestiging is verplicht.")
    .oneOf([Yup.ref("password")], "Wachtwoorden komen niet overeen."),
});

const RegisterPage = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // POST request naar de server met die values
    },
    validationSchema,
  });

  // Referenties aanmaken - 3 Stappen
  // Stap 1 - Referentie aanmaken
  const nameTxtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameTxtRef && nameTxtRef.current !== null) {
      nameTxtRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center p-8">
      <h1 className="text-center text-4xl font-thin">Registreren</h1>

      <form className="p-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-thin text-sm">
          Naam
        </label>
        <input
          type="text"
          className="block border px-4 py-2 rounded-lg w-full"
          placeholder="John Doe"
          id="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          // STAP 2: Referentie koppelen
          ref={nameTxtRef}
        />
        {errors.name !== undefined && (
          <p className="text-red-700 text-sm font-light">{errors.name}</p>
        )}
        <label htmlFor="email" className="font-thin text-sm">
          Email
        </label>
        <input
          type="text"
          className="block border px-4 py-2 rounded-lg w-full"
          placeholder="test@hogent.be"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email !== undefined && (
          <p className="text-red-700 text-sm font-light">{errors.email}</p>
        )}
        <label htmlFor="password" className="font-thin text-sm">
          Wachtwoord
        </label>
        <input
          type="password"
          className="block border px-4 py-2 rounded-lg w-full"
          id="password"
          placeholder="*****"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password !== undefined && (
          <p className="text-red-700 text-sm font-light">{errors.password}</p>
        )}
        <label htmlFor="confirmPassword" className="font-thin text-sm">
          Wachtwoord bevestiging
        </label>
        <input
          type="password"
          className="block border px-4 py-2 rounded-lg w-full"
          id="confirmPassword"
          placeholder="*****"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword !== undefined && (
          <p className="text-red-700 text-sm font-light">
            {errors.confirmPassword}
          </p>
        )}
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
