import { Header } from "../components";
import { Navbar } from "../components";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";

function HomeLayout() {
  const loader = useNavigation();
  const isPanding = loader.state === "loading";
  return (
    <>
      <Header />
      <Navbar />

      {isPanding ? (
        <Loading />
      ) : (
        <main className="align-elements">
          <Outlet />
        </main>
      )}
    </>
  );
}

export default HomeLayout;
