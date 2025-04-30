import { useFormik } from "formik";
// import { ChangeEvent, FormEvent, useState } from "react";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is een verplicht veld.")
    .email("Geen geldig emailadres."),
  password: Yup.string().required("Wachtwoord is een verplicht veld."),
});

const LoginPage = () => {
  // 1ste manier -> aparte states voor elk invoerelement
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // 2de manier -> samengevoegde state voor ons formulier
  // const [formState, setFormState] = useState({
  //   email: "",
  //   password: "",
  // });

  // 3de manier -> Gebruik te maken van Formik
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(
        `Inloggegevens (email): ${values.email}, (wachtwoord): ${values.password}`
      );
      // POST request naar de server met de credentials voor in te loggen
    },
    validationSchema: validationSchema,
  });

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const inputName = event.target.name;

  //   setFormState({ ...formState, [inputName]: event.target.value });
  // };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   // Manueel valideren van gegevens

  //   console.log(
  //     `Inloggegevens (email): ${formState.email}, (wachtwoord): ${formState.password}`
  //   );
  //   // POST request versturen naar de server met deze inloggegevens
  //   event.preventDefault();
  // };

  return (
    <div className="min-h-screen flex flex-col justify-center p-8">
      <h1 className="text-center text-4xl font-thin">Inloggen</h1>

      <form className="p-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="email" className="font-thin text-sm">
          Email
        </label>
        <input
          type="text"
          className="block border px-4 py-2 rounded-lg w-full"
          placeholder="test@hogent.be"
          id="email"
          name="email"
          // required
          // Controlled component
          value={values.email}
          // onChange={(event) => {
          //   setFormState({ ...formState, email: event.target.value });
          //   // setEmail(event.target.value);
          // }}
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
          name="password"
          placeholder="*****"
          value={values.password}
          // onChange={(event) => {
          //   setFormState({ ...formState, password: event.target.value });
          //   // setPassword(event.target.value);
          // }}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password !== undefined && (
          <p className="text-red-700 text-sm font-light">{errors.password}</p>
        )}
        <button
          type="submit"
          className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-sky-800">
          Inloggen
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
