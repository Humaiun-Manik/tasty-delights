import React from "react";
import { Button, Form } from "react-bootstrap";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="email-login-content d-flex align-items-center justify-content-center">
      <div className=" w-100 mx-5">
        <h4 className="text-center fw-bold mb-4">Sign up for free!</h4>
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className="py-2 ps-4 fs-5" type="email" placeholder="Email address" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className="py-2 ps-4 fs-5" type="email" placeholder="Full name" />
          </Form.Group>

          <Form.Group className="mb-4 position-relative" controlId="formBasicPassword">
            <Form.Control className="py-2 ps-4 fs-5" type="password" placeholder="Password"></Form.Control>
            <AiOutlineEyeInvisible
              style={{ marginTop: "-8px" }}
              className="fs-5 me-3 position-absolute top-50 end-0 eye "
            />
          </Form.Group>
          <p className="text-secondary text-center">
            I agree to the <Link>privacy policy</Link> and <Link>terms of service</Link>.
          </p>
          <Button className="w-100 fs-5 submit-btn" type="submit">
            Sign up with email
          </Button>
        </Form>
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
