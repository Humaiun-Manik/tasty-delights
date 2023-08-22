import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // validate
    if (/(?=.*\d) /.test(password)) {
      setError("Please add at least one digit");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Please add at least one lower case");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one upper case");
      return;
    } else if (password.length < 8) {
      setError("Your password must be at least 8 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        toast.success("User has been created successfully", {
          icon: "🚀",
        });
        updateUserData(user, name);
        sendVerificationEmail(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, { displayName: name })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user).then(() => {
      toast("Please verify your email address");
    });
  };

  return (
    <div className="email-login-content d-flex align-items-center justify-content-center">
      <div className=" w-100 mx-5">
        <h4 className="text-center fw-bold mb-4">Sign up for free!</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-4" controlId="">
            <Form.Control
              className="py-2 ps-4 fs-5"
              type="text"
              name="name"
              placeholder="Full name"
              required
            />
          </Form.Group>

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
              autoComplete="on"
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
          <p className="text-secondary text-center">
            I agree to the <Link>privacy policy</Link> and <Link>terms of service</Link>.
          </p>
          <Button className="w-100 fs-5 submit-btn" type="submit">
            Sign up with email
          </Button>
        </Form>
        <p className="text-danger mt-3">{error}</p>
        <p className="text-center mt-3">
          <Link to={"/login"} className="link-underline link-underline-opacity-0">
            Already have an account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
