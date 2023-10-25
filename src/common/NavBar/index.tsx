import { Link } from "../../common/Link";
import heroUrl from "../../assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const backgroundImage = `url(${heroUrl})`;

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage }}>
      <div className="flex justify-between px-16 py-8">
        <div className="flex space-x-4">
          <Link
            className="text-white text-lg cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Home
          </Link>
          <Link
            className="text-white text-lg cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About
          </Link>
          <Link
            className="text-white text-lg cursor-pointer"
            onClick={() => navigate("/countries")}
          >
            Countries
          </Link>
          <Link
            className="text-white text-lg cursor-pointer"
            onClick={() => navigate("/art")}
          >
            Art
          </Link>
          <Link
            className="text-white text-lg cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Link>
        </div>
        <div className="cursor-pointer">
          <span className="text-white text-3xl">T</span>
          <span className="text-orange text-xl">j</span>
        </div>
      </div>
    </div>
  );
};
