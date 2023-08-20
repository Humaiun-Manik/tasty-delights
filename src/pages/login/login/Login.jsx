import React from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
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
        <Form className="">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className="py-2 ps-4 fs-5" type="email" placeholder="Email address" />
          </Form.Group>

          <Form.Group className="mb-4 position-relative" controlId="formBasicPassword">
            <Form.Control className="py-2 ps-4 fs-5" type="password" placeholder="Password"></Form.Control>
            <AiOutlineEyeInvisible
              style={{ marginTop: "-8px" }}
              className="fs-5 me-3 position-absolute top-50 end-0 eye "
            />
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
      </div>
    </div>
  );
};

export default Login;
