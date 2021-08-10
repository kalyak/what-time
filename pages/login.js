import { useRouter } from "next/router";
import { useContext } from "react";
import LoginForm from "../components/UI/LoginForm";
import AuthContext from "../store/auth-context";

const LogInPage = () => {
  // const authCtx = useContext(AuthContext);
  // const router = useRouter();

  // const loginHandler = (loginData) => {
  //   authCtx.onLogin();
  //   router.replace("/");
  // };

  return <LoginForm />;
};

export default LogInPage;
