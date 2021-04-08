import { FunctionComponent } from "react";

export const loginUrl = "https://fe-react-app.auth.eu-central-1.amazoncognito.com/login?client_id=424mllnjg0vb83q1qbpojq55h0&response_type=token&scope=aws.cognito.signin.user.admin+email+openid&redirect_uri=http://localhost:3000/auth/token";

const App: FunctionComponent<unknown> = () => {

  return (
    <div className="app">
      <main className="wrapper">
        <a href={loginUrl}> LOGIN </a>
      </main>
    </div>
  );
}

export default App;
