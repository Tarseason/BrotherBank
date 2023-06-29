import { useLoaderData, defer, Await, json } from "react-router-dom";
import { Suspense } from "react";
import Main from "../components/Main";
import Profile from "../components/Profile";

function HomePage() {
  const data = useLoaderData();
  const { userData } = data;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <main className="contentMain">
        <Await resolve={userData}>
          <Profile infoProfile={userData.profileData} />
        </Await>
        <Await resolve={userData}>
          <Main infoMain={userData.favorData} />
        </Await>
      </main>
    </Suspense>
  );
}
export default HomePage;

async function loadHome() {
  const infoUser = JSON.parse(localStorage.getItem("userInfo"));
  const { user } = infoUser;

  const profileResponse = await fetch("http://localhost:3001/user/" + user.id);

  if (!profileResponse.ok) {
    return json({ message: "Could not fetch events." }, { status: 500 });
  }

  const profileData = await profileResponse.json();

  const favorResponse = await fetch(
    "http://localhost:3001/favor/direct/" + user.id
  );

  if (!favorResponse.ok) {
    return json({ message: "Could not fetch events." }, { status: 500 });
  }

  const favorData = await favorResponse.json();
  const userData = { profileData, favorData };
  return userData;
}

export async function loader() {
  return defer({
    userData: await loadHome(),
  });
}
