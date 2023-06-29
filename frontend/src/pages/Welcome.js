import { Link } from "react-router-dom";
import PageContent from "../components/PageContent";
import HeroRootLayout from "./HeroRootLayout";

function Welcome() {
  return (
    <>
      <HeroRootLayout />
      <PageContent title="Welcome">
        <p>Brother Bank na Area!</p>
        <p>
          Go to <Link to="/login">Login</Link>.
        </p>
      </PageContent>
    </>
  );
}

export default Welcome;
