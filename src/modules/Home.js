import { Link, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Homepage</h1>
      <p>
        <Link to="/products">Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
