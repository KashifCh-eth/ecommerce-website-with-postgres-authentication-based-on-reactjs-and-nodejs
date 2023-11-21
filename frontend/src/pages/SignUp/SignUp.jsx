import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
import axios from "axios";

// import { auth } from "../../firebase/firebase-config";
import authContext from "../../store/store";
import { useContext } from "react";
import { useState, useEffect } from "react";

function SignUp() {
  const authCtx = useContext(authContext);
  const navigate = useNavigate();
  console.log(authCtx);

  const initialValues = {
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("*Required"),
    number: Yup.number().required("*Required"),
    email: Yup.string().email("Invalid email format").required("*Required"),
    password: Yup.string().required("*Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("*Required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Accept terms & conditions"
    ),
  });

  const onSubmit = async (values) => {
    console.log("Form data of creating new user", values);
    try {
      const data = {
        name: values.name,
        number: values.number.toString(),
        email: values.email,
        password: values.password,
      };

      axios
        .post("http://localhost:3000/users/createuser", data)
        .then((response) => {
          console.log(response);
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error of", error);
        });

      // authCtx.setToken(res.accessToken);
      // localStorage.setItem("token", res.accessToken);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    authCtx.setToken(token);
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className=" bg-slate-600 text-white text-center p-4 h-screen flex items-center max-lg:flex-col max-lg:h-auto">
        <div className=" w-96">
          <NavLink to="/">
            <h1 className="backdrop-blur-sm bg-white/30 p-4 max-lg:m-4">
              CRESCENDO
            </h1>
          </NavLink>
        </div>
        <div className=" flex flex-col">
          <h1 className=" font-light text-center text-2xl">Sign Up</h1>
          <Formik
            className=" p-28 "
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="p-4 m-2">
                <Field
                  className="p-2 outline-none text-center text-black font-bold"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <p className=" text-red-500 test-sm">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <div className="p-4 m-2">
                <Field
                  className="p-2 outline-none text-center text-black font-bold"
                  type="number"
                  name="number"
                  placeholder="Number"
                />
                <p className=" text-red-500 test-sm">
                  <ErrorMessage name="number" />
                </p>
              </div>
              <div className="p-4 m-2">
                <Field
                  className="p-2 outline-none text-center text-black font-bold"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <p className=" text-red-500 test-sm">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="p-4 m-2">
                <Field
                  className="p-2 outline-none text-center text-black font-bold"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <p className=" text-red-500 test-sm">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="p-4 m-2">
                <Field
                  className="p-2 outline-none text-center text-black font-bold"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confrim password"
                />
                <p className=" text-red-500 test-sm">
                  <ErrorMessage name="confirmPassword" />
                </p>
              </div>

              <div>
                <label>
                  <Field
                    className="p-2 outline-none text-center text-black font-bold"
                    type="checkbox"
                    name="termsAndConditions"
                  />
                  <span className="ml-2">
                    I accept the terms and conditions
                  </span>
                </label>
                <p className=" text-red-500 test-sm">
                  <ErrorMessage name="termsAndConditions" />
                </p>
              </div>

              <button
                type="submit"
                className="p-2  px-6 border cursor-pointer text-center font-bold hover:bg-white hover:text-black"
              >
                Submit
              </button>
            </Form>
          </Formik>
          <p className="mt-12">
            By clicking Sign Up You will Register, if you have already account.
            then you Click to &nbsp;
            <NavLink to="/login" className=" text-red-500">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
