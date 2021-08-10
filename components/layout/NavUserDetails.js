import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import AuthContext from "../../store/auth-context";

const NavUserDetails = (props) => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const isLoggedIn = authCtx.isLoggedIn;

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
