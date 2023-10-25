import { Button } from "antd";
import { NavBar } from "../../common/NavBar";
import heroUrl from "../../assets/hero-image.jpg";
import { Title } from "../../common/Title";
import { useState } from "react";

export const Home = () => {
  const backgroundImage = `url(${heroUrl})`;
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage }}
      >
        <NavBar />
        <div className="flex flex-col justify-center items-center h-full absolute top-0 left-0 right-0 bottom-0 space-y-8">
          <Title className="text-5xl md:text-7xl text-white" title="Japan" />
          <p className="text-white text-base md:text-lg text-center w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nulla facere, nihil reiciendis fugiat atque blanditiis iusto
            debitis? Qui in accusamus a doloremque ullam! Similique.
          </p>
          <Button
            className="border-2 w-24 h-8 md:w-32 md:h-10 text-white text-base md:text-lg"
            onClick={toggleMore}
          >
            {showMore ? "MORE" : "MORE"}
          </Button>
        </div>
      </div>
      {showMore && (
        <div
          className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1953&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        >
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            <Title
              className="text-5xl md:text-4xl text-white"
              title="Beautiful places"
            />
            <p className="text-white text-base md:text-lg text-center w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nulla facere, nihil reiciendis fugiat atque blanditiis iusto
              debitis? Qui in accusamus a doloremque ullam! Similique.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
