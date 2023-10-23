import heroUrl from "../../assets/hero-image.jpg";
import { Title } from "../../common/Title";

export const Hero = () => {
  const backgroundImage = `url(${heroUrl})`;

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage }}
    >
      <Title className="text-6xl md:text-9xl px-28" title="Japan" />
    </div>
  );
};
