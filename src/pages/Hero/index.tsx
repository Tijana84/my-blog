import { Button } from "antd";
import heroUrl from "../../assets/hero-image.jpg";
import { Link } from "../../common/Link";
import { Title } from "../../common/Title";
import { ArrowDown } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const backgroundImage = `url(${heroUrl})`;
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage }}
    >
      <Link
        className="text-white text-2xl md:text-6xl underline underline-offset-8 mb-8 md:mb-16"
        onClick={() => navigate("/home")}
      >
        Blog
      </Link>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Title
          className="text-6xl md:text-9xl px-28 mb-8 md:mb-16"
          title="Japan"
        />
        <Button className="border-2 !border-white rounded-full w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
          <div className="text-white text-center text-2xl md:text-5xl">
            <ArrowDown />
          </div>
        </Button>
      </div>
    </div>
  );
};
