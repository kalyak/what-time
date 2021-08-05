import { Container, Navbar } from "react-bootstrap";
import NavUserDetails from "./NavUserDetails";

const MainNavigation = () => {
  return (
    <Navbar
      className="justify-content-center"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>What Time</Navbar.Brand>
        <NavUserDetails />
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
