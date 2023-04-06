import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Redux/actions";

const schema = Yup.object().shape({
  username: Yup.string().required("username is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 5 characters"),
});

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          console.log(values);
          dispatch(signIn(values));
          navigate("/");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login flex  justify-center h-96 items-center ">
            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
            <form noValidate onSubmit={handleSubmit}>
              <div className="text-6xl m-10 ml-32">Login</div>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

              <div className="border-4 border-red-300 rounded-xl p-10 shadow-md">
                <div className="mb-5">
                  <label htmlFor="username">Username: </label>
                  <input
                    type="username"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="Enter username"
                    className="border-2 border-gray-400 bg-gray-100 rounded p-2 focus:outline-none focus:border-2 focus:border-red-300"
                    id="username"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="text-sm italic text-red-500 px-10">
                    {errors.username && touched.username && errors.username}
                  </p>
                </div>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="border-2 bg-gray-100 border-gray-400 rounded p-2 focus:outline-none focus:border-2 focus:border-red-300"
                />
                {/* If validation is not passed show errors */}
                <p className="text-sm italic text-red-500 px-10">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <div className="justify-center flex">
                  <button
                    type="submit"
                    className=" py-2 px-10 mt-10 bg-red-300 text-white border-2 border-red-300 hover:text-red-300 hover:bg-white transition ease-out duration-500"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
