import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        if (!user.emailVerified) {
          toast.error("Please verify your email address");
        }
        setError("");
        form.reset();
        toast.success(`Welcome back, ${user.displayName}! Your login was successful.`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        error && setError("Login failed. Please check your email and password.");
      });
  };

  return (
    <div className="email-login-content d-flex align-items-center justify-content-center">
      <div className=" w-100 mx-5">
        <h4 className="text-center fw-bold">Login to your account</h4>
        <p className="text-center text-secondary mb-5">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="link-underline link-underline-opacity-0">
            Sign Up Free!
          </Link>
        </p>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="py-2 ps-4 fs-5"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4 position-relative" controlId="formBasicPassword">
            <Form.Control
              className="py-2 ps-4 fs-5"
              type={passwordType}
              name="password"
              placeholder="Password"
              required
            ></Form.Control>
            {passwordType === "password" ? (
              <AiOutlineEye
                onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")}
                style={{ marginTop: "-8px", cursor: "pointer" }}
                className="fs-5 me-3 position-absolute top-50 end-0 eye "
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")}
                style={{ marginTop: "-8px", cursor: "pointer" }}
                className="fs-5 me-3 position-absolute top-50 end-0 eye "
              />
            )}
          </Form.Group>
          <Form.Group
            className="mb-4 d-flex align-items-center justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Remember me" />
            <Link to={"/forgot"} className="link-underline link-underline-opacity-0">
              Forgot password?
            </Link>
          </Form.Group>
          <Button className="w-100 fs-5 submit-btn" type="submit">
            Login with email
          </Button>
        </Form>
        <p className="text-danger mb-0 mt-3">{error}</p>
      </div>
    </div>
  );
};

export default Login;
