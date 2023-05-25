import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
    <div>Login page</div>
      <p>
        Login <Link to="/home">Click para fazer login</Link>.
      </p>
    </>
    
  )
}

export default LoginPage;