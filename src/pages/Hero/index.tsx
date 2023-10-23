import { Button } from "antd";
import heroUrl from "../../assets/hero-image.jpg";
import { Title } from "../../common/Title";
import { ArrowDown } from "phosphor-react";

export const Hero = () => {
  const backgroundImage = `url(${heroUrl})`;

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage }}
    >
      <Title
        className="text-6xl md:text-9xl px-28 mb-8 md:mb-16"
        title="Japan"
      />
      <Button className="border-2 border-x-white rounded-full w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
        <div className="text-white text-center text-2xl md:text-5xl">
          <ArrowDown />
        </div>
      </Button>
    </div>
  );
};
