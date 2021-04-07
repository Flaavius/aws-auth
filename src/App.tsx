import { useEffect, useState, FunctionComponent } from "react";
import {
  withAuthenticator,
  AmplifySignOut,
} from "@aws-amplify/ui-react";

import { Auth } from "aws-amplify";

const App: FunctionComponent<unknown> = () => {
  const [ state, setState ] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        Auth.currentCredentials()
        setState(userInfo);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="app">
      <main className="wrapper">
        <h3> Data: </h3>
        <pre>
          {JSON.stringify(state, undefined, 2)}
        </pre>
      </main>
      <div className="logout">
        <AmplifySignOut />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
