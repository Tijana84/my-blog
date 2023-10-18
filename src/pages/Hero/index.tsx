import heroUrl from "../../assets/hero-image.jpg";

export const Hero = () => {
  const backgroundImage = `url(${heroUrl})`;

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage }}
    ></div>
  );
};
