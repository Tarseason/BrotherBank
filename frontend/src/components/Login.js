import { Form } from "react-router-dom";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

function Login() {
  return (
    <Card>
      <Form onSubmit={''}>
        <label htmlFor="emailSame">E-mail</label>
        <input
          id="emailSame"
          type="email"
          value={""}
          onChange={""}
        />
        <label htmlFor="passwordSame">Senha</label>
        <input
          id="passwordSame"
          type="password"
          value={""}
          onChange={""}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  )
}

export default Login;