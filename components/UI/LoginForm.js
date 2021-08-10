import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import AuthContext from "../../store/auth-context";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // const enteredEmail = emailInputRef.current.value;
    // const enteredPassword = passwordInputRef.current.value;

    // const loginData = {
    //   email: enteredEmail,
    //   password: enteredPassword,
    // };

    // return loginData;
    authCtx.onLogin();

    router.replace("/");
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={emailInputRef}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          ref={passwordInputRef}
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginForm;
