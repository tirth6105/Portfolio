import "./App.css";
import Home from "./Home";
import life from "../src/img/life.png";
import { useEffect, useState } from "react";

function App() {
  // const [scrollY, setScrollY] = useState(0);
  // const [rotation, setRotation] = useState(true);

  // const handleWheel = (event) => {
  //   // Prevent the default scroll behavior
  //   event.preventDefault();

  //   // Adjust the rotation based on the scroll direction
  //   const delta = event.deltaY > 0 ? 0 : 0; // Adjust speed of scroll
  //   setRotation((prevRotation) => prevRotation + delta);
  // };

  // useEffect(() => {
  //   // Add event listener for mouse wheel
  //   window.addEventListener("wheel", handleWheel, { passive: false });

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);
  // const handleScroll = (event) => {
  //   const delta = event.deltaY; // Detect scroll direction (positive for down, negative for up)
  //   console.log("Scroll triggered");

  //   // Use callback pattern to ensure correct previous state is used
  //   setScrollY((prevScrollY) => prevScrollY + delta * 1); // Multiply delta by a factor to adjust speed
  // };

  // useEffect(() => {
  //   // Add event listener for mousewheel to detect scroll direction
  //   window.addEventListener("wheel", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(scrollY);
  //   window.addEventListener("wheel", handleScroll);
  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, []);

  // const getCarouselStyle = (index) => {
  //   const angle = scrollY / 30 + index * 40; // Calculate the rotation angle

  //   // Determine z-index based on the angle (higher z-index for images near the front)
  //   const zIndex = Math.abs((angle % 360) - 90) < 360 ? 1 : -1;

  //   return {
  //     transform: `rotateY(${angle}deg) translateZ(500px)`,
  //     zIndex: zIndex, // Apply z-index dynamically
  //   };
  // };
  

  //  const [position, setPosition] = useState({ x: 0, y: 0 });

  //  const handleMouseMove = (e) => {
  //    const x = e.clientX - window.innerWidth / 2;
  //    const y = e.clientY - window.innerHeight / 2;

  //    // Set position relative to the cursor movement
  //    setPosition({ x, y });
  //  };
  return (
    <div>
      {/* <div className="bg-[#30296D] h-[750px] relative">
        <div className="carousel-container">
          <div className="carousel">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="carousel-item"
                style={getCarouselStyle(index)}
              >
                <img src={life} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="iframe-container">
            <iframe
              src="https://my.spline.design/untitled-da584ad507e8f229a60321a6080f7404/"
              frameborder="1"
              className="scroll-iframe"
            ></iframe>
          </div>
          <div className="image-container" onMouseMove={handleMouseMove}>
            <img
              src={require("../src/img/batuk.webp")} // Assuming you saved the file as 'batuk.webp'
              alt="Moving Image"
              className="moving-image"
              style={{
                transform: `translate(${position.x * 0.05}px, ${
                  position.y * 0.05
                }px)`,
              }}
            />
          </div>
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-91108347fab4301bfa33e7f18890237a/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
          <iframe
            src="https://my.spline.design/happyrobotbutton-c5909bbc33300a89339fdf189de32b8a/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>

          loader
          <iframe
            src="https://my.spline.design/play-0f2e7f72326db432a8fd7f2431681c1d/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>

          phone
          <iframe
            src="https://my.spline.design/dynamiciphonemockup-e42cb179ae7fb27acf5109e6d8f83eaf/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div> */}
   <Home />
    </div>
  );
}

export default App;

{
  /* <div className="carousel-container">
          <div className="carousel">
            <div className="carousel-item">
              <img src={life} alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src={life} alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src={life} alt="Image 3" />
            </div>
            <div className="carousel-item">
              <img src={life} alt="Image 4" />
            </div>
            <div className="carousel-item">
              <img src={life} alt="Image 5" />
            </div>
            <div className="carousel-item">
              <img src={life} alt="Image 6" />
            </div>
            <div className="carousel-item">
              <img src={life} alt="Image 7" />
            </div>
            <div className="carousel-item">
              <img src={life} alt="Image 8" />
            </div>
          </div>
        </div> */
}
