import { ComponentType } from "react";
import { loginUrl } from "./App";
import { userManager } from "./userManager";

const withAuth = (Component: ComponentType) => (props: any) => {
  if(!userManager.isLoggedIn()) {
    window.open(loginUrl);
    return null;
  }

  return <Component {...props} />
};

export default withAuth;