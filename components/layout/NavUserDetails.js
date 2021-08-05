import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavUserDetails = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandler = () => {
    router.push("/login");
  };
  return (
    // <>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse className="justify-content-end">
    <Nav>
      {!isLoggedIn && <Button onClick={loginHandler}>Log in</Button>}
      {isLoggedIn && <Navbar.Text>Signed in as: USER</Navbar.Text>}
    </Nav>
    //   {/* </Navbar.Collapse> */}
    // </>
  );
};

export default NavUserDetails;
