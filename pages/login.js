import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";

const LogInPage = () => {
  const router = useRouter();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    router.replace("/");
  };
  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LogInPage;
