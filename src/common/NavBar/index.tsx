import { Link } from "../../common/Link";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hidden md:flex md:justify-between md:px-16 md:py-8">
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
