import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const { resetPassword } = useContext(AuthContext);

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email)
      .then(() => {
        event.target.reset();
        toast("Please check your email");
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  return (
    <div className="email-login-content d-flex align-items-center justify-content-center">
      <div className=" w-100 mx-5">
        <h4 className="fw-bold mb-2">Recover your password</h4>
        <p className="mb-4 text-secondary">
          Fill in your e-mail address below and we will send you an email with further instructions.
        </p>
        <Form onSubmit={handleResetPassword}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="py-2 ps-4 fs-5"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
          </Form.Group>
          <Button className="w-100 fs-5 submit-btn" type="submit">
            Recover your password
          </Button>
        </Form>
        <p className="text-danger my-3">{error}</p>
        <p className="mt-4">
          <Link to={"/login"} className="link-underline link-underline-opacity-0">
            Already have an account?
          </Link>
        </p>
        <p className="mt-3">
          <Link to={"/signup"} className="link-underline link-underline-opacity-0">
            Don’t have an account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
