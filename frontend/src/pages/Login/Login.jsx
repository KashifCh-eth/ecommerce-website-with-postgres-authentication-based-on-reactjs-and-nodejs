import { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
// import { auth } from "../../firebase/firebase-config";
// import { signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import * as Yup from "yup";
import authContext from "../../store/store";

function Login() {
  const navigate = useNavigate();
  const authCtx = useContext(authContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("Form data", values);
    try {
      const data = {
        email: values.email,
        password: values.password,
      };

      axios
        .post("http://localhost:3000/users/fatchuser", data)
        .then((response) => {
          console.log(response);
          alert(`Welcome back! ${response.data.email}`);
          authCtx.setToken(response.data.accessToken);
          localStorage.setItem("token", response.data.accessToken);
          navigate("/");
        })
        .catch((error) => {
          console.log("Error of", error);
        });

      // alert(`Welcome back! ${user.user.email}`);
      // localStorage.setItem("token", user.user.accessToken);
      // authCtx.setToken(user.user.accessToken);
      // navigate("/");
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
    <div className="bg-slate-600 text-white text-center h-screen flex justify-center items-center max-md:h-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1 className="flex my-8 backdrop-blur-sm bg-white/30 p-4 max-lg:m-4 justify-center text-2xl font-thin">
            CRESCENDO
          </h1>
          <div className="flex text-black justify-center ">
            <div className="py-8 p-1 flex flex-col">
              <p className=" text-red-500">
                {" "}
                <ErrorMessage name="email" />
              </p>

              <Field
                type="email"
                name="email"
                id="email"
                className=" outline-none p-2"
                placeholder="Email"
              />
            </div>

            <div className="py-8 p-1 flex flex-col">
              <p className=" text-red-500">
                {" "}
                <ErrorMessage name="password" />
              </p>
              <Field
                type="password"
                name="password"
                id="password"
                className=" outline-none p-2 "
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" m-8 backdrop-blur-sm bg-white/30 py-4 p-6 max-lg:m-4 hover:bg-white/50"
          >
            Login
          </button>
          <p className="mt-12">
            Don't have an account? &nbsp;
            <NavLink to="/signup" className=" text-red-500">
              Sign Up
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
