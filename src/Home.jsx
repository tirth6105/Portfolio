import React, { useEffect, useRef, useState } from "react";
import logo from "../src/img/logo.png";
import hero from "../src/img/hero.png";
import me from "../src/img/me.jpeg";
import gym from "../src/img/gym.jpeg";
import back from "../src/img/back.jpeg";
import fudadi from "../src/img/fudadi.png";
import vel from "../src/img/vel.png";
import squre from "../src/img/squre.png";
import book from "../src/img/book.png";
import signature from "../src/img/signature.png";
import mysign from "../src/img/mysignature.png";
import second from "../src/img/second.jpg";
import linkdin from "../src/img/linkdin.png";
import github from "../src/img/git.png";
import insta from "../src/img/instagram.png";
import css from "../src/img/css.png";
import html from "../src/img/html.png";
import react from "../src/img/react.png";
import redux from "../src/img/redux.png";
import bootstrep from "../src/img/bootstrep.png";
import chakra from "../src/img/chakra.png";
import tailwind from "../src/img/tailwind.png";
import bag from "../src/img/bag.png";
import book2 from "../src/img/book2.png";
import notepen from "../src/img/notepen.png";
import end from "../src/img/saman.png";
import life from "../src/img/life.png";
import covid from "../src/img/covid.png";
import one from "../src/img/123-removebg-preview.png";
// import resume from "..public"
import AOS from "aos";
import "aos/dist/aos.css";

import { RxArrowTopRight } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Loading from "./Loading";

const Home = () => {
  // cursor-custmization
  const outerCircleRef = useRef(null);
  const innerDotRef = useRef(null);

  useEffect(() => {
    const outerCircle = outerCircleRef.current;
    const innerDot = innerDotRef.current;

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let dotX = 0,
      dotY = 0;
    const speed = 0.05; // Speed of the outer circle movement
    const dotChaseSpeed = 0.05; // Speed for the dot chasing effect
    const dotDistance = 3; // Distance of the dot from the center of the outer circle
    const threshold = 3; // Distance to center the dot

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Calculate new position for the cursor (outer circle)
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      // Update the position of the outer circle
      if (outerCircle) {
        outerCircle.style.transform = `translate(${cursorX - 16}px, ${
          cursorY - 16
        }px)`;
      }

      // Calculate the angle based on the outer circle position
      const angle = Math.atan2(mouseY - cursorY, mouseX - cursorX);

      // Update the dot's position outside the outer circle initially
      dotX += (cursorX + Math.cos(angle) * dotDistance - dotX) * dotChaseSpeed;
      dotY += (cursorY + Math.sin(angle) * dotDistance - dotY) * dotChaseSpeed;

      // Position the dot
      if (innerDot) {
        innerDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`; // Center the dot
      }

      // Check if the mouse is close enough to the outer circle to center the dot
      const distanceToCenter = Math.sqrt(
        (cursorX - mouseX) ** 2 + (cursorY - mouseY) ** 2
      );

      // If the outer circle is close enough to the cursor, center the dot inside the outer circle
      if (distanceToCenter < threshold) {
        innerDot.style.transform = `translate(${cursorX - 4}px, ${
          cursorY - 4
        }px)`; // Center the dot
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove); // Cleanup listener
    };
  }, []);
  // cursor-custmization

  const [activeButton, setActiveButton] = useState("button1");
  const [showButton, setShowButton] = useState(false);
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const resumeSectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(283); // Full stroke offset at start
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isinput, setIsinput] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleButton = () => {
    const scrollTotal =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = (window.scrollY / scrollTotal) * 100;
    setScrollProgress(scrollFraction);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleButton);
    return () => {
      window.removeEventListener("scroll", handleButton);
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    // Check if the ref exists, then scroll
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sgstd5y", "template_uwafsq4", form.current, {
        publicKey: "E2nD7oa9xQSWtdgoK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleMouseMove = (e) => {
    // Get the position of the mouse in relation to the window's width and height
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    // Update the offset
    setOffset({ x, y });
  };

  // Attach event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      // Apply your style or animation here
      loader.style.animation = "strokeAnimate 2s ease infinite";
    }
  }, []);

  // for loader

  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds (or replace with real data load)
    }, 2500);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);
  // for loader

  const [scrollY, setScrollY] = useState(0);
  // const [rotation, setRotation] = useState(true);

  // const handleWheel = (event) => {
  //   // Prevent the default scroll behavior
  //   event.preventDefault();

  //   // Adjust the rotation based on the scroll direction
  //   const delta = event.deltaY > 0 ? 5 : -5; // Adjust speed of scroll
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getCarouselStyle = (index) => {
    const angle = scrollY / 40 + index * 40; // Dynamically rotate based on scrollY
    return {
      transform: `rotateY(${angle}deg) translateZ(500px)`,
    };
  };

  return (
    <div className="overflow-x-hidden">
      {
        isLoading ? (
          <Loading /> // Show loader when loading
        ) : null // Show the actual content after loading
      }
      <div className="custom-cursor ss:hidden mm:hidden sm:hidden md:hidden lg:block xl:block">
        <div className="outer-circle" ref={outerCircleRef}></div>
        <div className="inner-dot" ref={innerDotRef}></div>
      </div>
      {/* header-section */}
      <div className={`${isinput ? " blur-[2px]" : null}`}>
        {/* Navbar for larger screens */}
        <div className="ss:hidden mm:hidden sm:hidden md:flex lg:flex xl:flex h-[70px] bg-[#f8f6fc] items-center justify-between border rounded-[30px] border-black sm:mx-[30px] md:mx-[100px] lg:mx-[100px] xl:mx-[100px] my-8 px-10">
          <h1 className="text-[35px] font-bold cursor-pointer">
            Ti<span className="text-primary">r</span>th
          </h1>
          {/* <img className="cursor-pointer" src={logo} alt="logo" /> */}
          <div className="flex text-xl">
            <p
              className="ps-10 hover:text-primary transiton-all duration-300 cursor-pointer"
              onClick={() => scrollToSection(homeSectionRef)}
            >
              Home
            </p>
            <p
              className="ps-10 hover:text-primary transiton-all duration-300 cursor-pointer"
              onClick={() => scrollToSection(aboutSectionRef)}
            >
              About
            </p>
            <p
              className="ps-10 hover:text-primary transiton-all duration-300 cursor-pointer"
              onClick={() => scrollToSection(resumeSectionRef)}
            >
              Education
            </p>
            <p
              className="ps-10 hover:text-primary transiton-all duration-300 cursor-pointer"
              onClick={() => scrollToSection(projectsSectionRef)}
            >
              Projects
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* Hamburger Menu for mobile screens */}
        <div className="ss:flex mm:flex sm:flex md:hidden lg:hidden xl:hidden h-[70px] bg-[#f8f6fc] items-center justify-between border rounded-[30px] border-black mx-5 my-8 px-10">
          <h1 className="text-[35px] font-bold cursor-pointer">
            Ti<span className="text-primary">r</span>th
          </h1>
          <button
            className="text-xl"
            onClick={() => setSidebarOpen(!isSidebarOpen)} // You will manage this state
          >
            <FaBars />
          </button>
        </div>

        {/* Sidebar for mobile screens */}
        <div
          className={`ss:fixed mm:fixed sm:fixed md:hidden lg:hidden xl:hidden top-0 left-0 h-full w-[250px] bg-[#f8f6fc] z-10 p-6 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } `} // Sidebar state to show or hide
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-[35px] font-bold cursor-pointer">
                Ti<span className="text-primary">r</span>th
              </h1>
            </div>
            <div className="flex items-center">
              <button
                className="text-2xl"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
              >
                <IoClose />
              </button>
            </div>
          </div>
          <ul className="space-y-6">
            <li
              className="hover:text-primary text-xl cursor-pointer"
              onClick={() => {
                scrollToSection(homeSectionRef);
                setSidebarOpen(false);
              }}
            >
              Home
            </li>
            <li
              className="hover:text-primary text-xl cursor-pointer"
              onClick={() => {
                scrollToSection(aboutSectionRef);
                setSidebarOpen(false);
              }}
            >
              About
            </li>
            <li
              className="hover:text-primary text-xl cursor-pointer"
              onClick={() => {
                scrollToSection(resumeSectionRef);
                setSidebarOpen(false);
              }}
            >
              Education
            </li>
            <li
              className="hover:text-primary text-xl cursor-pointer"
              onClick={() => {
                scrollToSection(projectsSectionRef);
                setSidebarOpen(false);
              }}
            >
              Projects
            </li>
          </ul>
          <div>
            <div className="flex mt-[50vh] justify-between align-bottom gap-2">
              <div>
                <div className="flex justify-center items-center bg-white border  w-[35px] h-[35px] rounded-full">
                  <a href="https://www.linkedin.com/in/tirth-kalathiya-286b68269/">
                    <img
                      className="w-[18px] h-[18px] hover:cursor-pointer"
                      src={linkdin}
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center bg-white border  w-[35px] h-[35px] rounded-full">
                  <a href="https://github.com/tirth6105">
                    <img
                      className="w-[18px] h-[18px] hover:cursor-pointer"
                      src={github}
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center bg-white border  w-[35px] h-[35px] rounded-full">
                  <img
                    className="w-[18px] h-[18px] hover:cursor-pointer"
                    src={insta}
                    alt="Instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 tracking-[2px] ss:text-[80px] mm:text-[100px] sm:text-[100px] md:text-[110px] lg:text-[105px] xl:text-[160px] tirth ss:top-[50px] sm:top-[35px] mm:top-[35px] md:top-[35px] lg:top-[35px] xl:top-[0] leading-none absolute font-montserrat text-[200px] font-black text-[#fff] opacity-[0.05]">
        Tirth
      </div>

      {isinput && (
        <div className="flex justify-center items-center relative">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="absolute ss:top-[400px] mm:top-[400px] sm:top-[430px] md:top-[400px] lg:top-[0px] xl:top-[0px] ss:w-[300px] mm:w-[350px] sm:w-[400px] md:w-[500px] lg:w-[500px] xl:w-[500px] p-[20px] bg-[#f8f6fc] h-[500px] rounded-[30px] z-20"
          >
            <h3 className="text-xl font-semibold w-[110px] h-[40px]">
              Contect Me
            </h3>
            <input
              placeholder="Name"
              type="text"
              name="to_name"
              className="p-[15px] mb-[15px] w-full h-[50px] border border-[#eae8ef] rounded-[20px]"
            />
            <input
              placeholder="Number"
              type="text"
              name="number"
              className="p-[15px] mb-[15px] w-full h-[50px] border border-[#eae8ef] rounded-[20px]"
            />
            <input
              placeholder="Email"
              type="text"
              name="from_name"
              className="p-[15px] mb-[15px] w-full h-[50px] border border-[#eae8ef] rounded-[20px]"
            />
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              className="p-[15px] mb-[15px] w-full h-[50px] border border-[#eae8ef] rounded-[20px]"
            />
            <textarea
              placeholder="Your Subject"
              name="message"
              className="p-[15px] mb-[15px] w-full h-[105px] border border-[#eae8ef] rounded-[20px]"
            />
            <div className="flex justify-between">
              <button className="w-[90px] h-[40px] border border-[#000000] rounded-[20px] font-semibold hover:border-0 hover:bg-primary hover:text-white  transition-all duration-300">
                Submit
              </button>
              <button
                className="w-[90px] h-[40px] border border-[#000000] rounded-[20px] font-semibold hover:border-0 hover:bg-primary hover:text-white  transition-all duration-300"
                onClick={() => setIsinput(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}

      {/* banner-section */}
      <div
        className={`ss:grid mm:grid sm:grid md:grid lg:grid xl:grid justify-center items-center ss:grid-cols-[90%] mm:grid-cols-[90%] sm:grid-cols-[90%] md:grid-cols-[90%] lg:grid-cols-[45%_45%] xl:grid-cols-[45%_45%] py-[100px] ${
          isinput ? " blur-[2px]" : null
        }`}
      >
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-delay="2000"
            className="flex justify-center overflow-hidden px-[12px]"
          >
            <div className="relative outer ss:w-[300px] ss:h-[300px] mm:w-[350px] mm:h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
              <div className="relative inner ss:w-[230px] ss:h-[230px] mm:w-[280px] mm:h-[280px] sm:w-[330px] sm:h-[330px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
                <div className="flex justify-center">
                  <img
                    className="ss:h-[230px] mm:h-[280px] sm:h-[320px] md:h-[400px] lg:h-[400px] xl:h-[440px]"
                    src={hero}
                    alt=""
                    style={{
                      transform: `translate(${offset.x * 10}px, ${
                        offset.y * 10
                      }px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[65px] h-[65px] absolute ss:bottom-[90px] mm:bottom-[40px] sm:bottom-[15px] md:bottom-[15px] lg:bottom-[15px] xl:bottom-[15px]"
            src={squre}
            alt=""
          />
        </div>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-delay="2000"
            className="relative"
          >
            <img
              className="ss:hidden mm:hidden sm:hidden md:hidden lg:block xl:block w-[50px] h-[50px] absolute top-[-80px] left-[50px]"
              src={fudadi}
              alt=""
            />
            <h4
              data-aos="fade-up"
              data-aos-duration="2400"
              className="text-[35px] mb-2 font-bold text-primary"
            >
              Hi, I am
            </h4>
            <img
              className="w-[70px] h-[70px] absolute end-[90px] top-[30px]"
              src={vel}
              alt=""
            />
            <h1
              data-aos="fade-up"
              data-aos-duration="2600"
              data-aos-delay="2000"
              className="font-bold mb-4 ss:text-[65px] mm:text-[78px] sm:text-[78px] md:text-[78px] lg:text-[78px] xl:text-[78px]"
            >
              Tirth Kalathiya
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2800"
              className="text-[27px] font-semibold "
            >
              I am a <span className="text-primary">Web Developer</span>
            </p>
          </div>

          <div className="pt-5 tracking-[2px] tirth leading-none absolute font-montserrat ss:text-[60px] mm:text-[70px] sm:text-[80px] md:text-[110px] lg:text-[105px] xl:text-[150px] font-black text-[#fff] opacity-[0.05] ">
            Kalathiya
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="2000"
            className="flex pt-4"
          >
            <div>
              <a href="lal.pdf" download="lal.pdf">
                <button className="border mt-3 me-5 py-[7px] px-[15px] font-semibold rounded-[15px] hover:bg-primary hover:text-white transiton-all duration-300 cursor-pointer">
                  Download CV
                </button>
              </a>
            </div>
            <div>
              <button
                className="border mt-3 py-[7px] px-[15px] font-semibold rounded-[15px] hover:bg-primary hover:text-white transiton-all duration-300 cursor-pointer"
                onClick={() => setIsinput(!isinput)}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about-section */}
      <div ref={aboutSectionRef} className="pb-[200px] ">
        <img className="w-[165px] h-[200px] absolute" src={book} alt="" />
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-[36px] font-bold text-center"
        >
          About <span className="text-primary">Me</span>
        </h1>

        {/* animation */}
        <div
          data-aos="fade-up"
          data-aos-duration="2200"
          className="flex justify-center"
        >
          <div className="w-[2px] h-[80px] bg-black"></div>
          <div className="ball w-[16px] h-[16px] absolute rounded-full bg-black"></div>
        </div>

        <div
        //  className="md:grid md:grid-cols-[90%] lg:grid lg:grid-cols-[33%_33%_33%] xl:grid xl:grid-cols-[33%_33%_33%] md:justify-center lg:justify-center xl:px-[80px] pt-7"
        >
          <div className="flex flex-wrap justify-center pt-7">
            <div
              data-aos="fade-up"
              data-aos-duration="2400"
              data-aos-delay="700"
              className="flex items-center ss:w-[280px] mm:w-[330px] sm:w-[380px] md:w-[380px] lg:w-[456px] xl:w-[440px] ss:order-2 mm:order-2 sm:order-2 md:order-2 lg:order-2 xl:order-1"
            >
              <div>
                <h3 className="abts text-[37px] font-bold text-[#fff] tracking-[0.08rem] opacity-[0.5] leading-[1.2] pb-6">
                  “Creativity bleeds from the pen of inspiration.”
                </h3>
                <p className="text-[14px] text-slate pb-4">
                  A Web Developer is responsible for building and maintaining
                  websites and web applications. They work across various
                  technologies to ensure that sites are functional, interactive,
                  and user-friendly
                </p>
                <h4 className="text-xl font-bold">Jr. Developer</h4>
                <p className="text-[14px] text-slate pb-4">Tirth Kalathiya</p>
                {/* <img className="w-[120px] h-[120px]" src={mysign} alt="" /> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2600"
              className="relative ss:mb-[450px] ss:ms-[5px] mm:mb-[500px] mm:ms-[10px] sm:mb-[550px] sm:ms-[10px] md:mb-[550px] md:ms-[50px] lg:mb-[550px] lg:ms-[310px] xl:ms-[0px] xl:mb-[0px] ss:w-[310px] mm:w-[370px] sm:w-[420px] md:w-[440px] lg:w-[960px] xl:w-[440px] group ss:order-1 mm:order-1 sm:order-1 md:order-1 lg:order-1 xl:order-2"
            >
              <div className="absolute  border border-black rounded-[200px]">
                <img
                  className="m-3 ss:w-[280px] mm:w-[330px] sm:w-[380px] md:w-[400px] lg:w-[400px] xl:w-[384px] rounded-[200px]"
                  src={gym}
                  alt=""
                />
              </div>
              {/* <div className="absolute w-[130px] h-[130px] bg-[#000000cc] rounded-full right-[80px] bottom-[-230px] flex items-center justify-center">
              <p className="text-md font-semibold text-[#fff] text-center">
                About Me
              </p>
            </div> */}
              <div className="circal flex items-center justify-center absolute w-[130px] h-[130px] bg-[#000000cc] rounded-full ss:left-[180px] ss:top-[300px] mm:left-[230px] mm:top-[350px] sm:left-[280px] sm:top-[430px] md:left-[280px] md:top-[430px] lg:left-[280px] lg:top-[430px] xl:right-[40px] xl:bottom-[-70px]">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text fill="#fff" fontSize="12" fontWeight="semibold">
                    <textPath
                      href="#circlePath"
                      startOffset="0"
                      textAnchor="middle"
                    >
                      About Me - About Me - About Me - About Me - About Me -
                      About Me - About Me About Me
                    </textPath>
                  </text>
                </svg>
                <div className="text-white text-xl font-bold">
                  <RxArrowTopRight />
                </div>
              </div>

              <div className="transition-all duration-500 ease-in-out h-[120px] absolute top-[180px] left-[390px] flex flex-col opacity-0 group-hover:opacity-100 group-hover:translate-x-[-5px] translate-x-[0px] gap-[10px]">
                <div>
                  <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-l-full">
                    <a
                      href="https://www.linkedin.com/in/tirth-kalathiya-286b68269/"
                      target="blank"
                    >
                      <img
                        className="w-[18px] h-[18px] hover:cursor-pointer"
                        src={linkdin}
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-l-full">
                    <a href="https://github.com/tirth6105" target="blank">
                      <img
                        className="w-[18px] h-[18px] hover:cursor-pointer"
                        src={github}
                        alt="GitHub"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-l-full">
                    <img
                      className="w-[18px] h-[18px] hover:cursor-pointer"
                      src={insta}
                      alt="Instagram"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2400"
              data-aos-delay="700"
              className="flex ss:w-[310px] mm:w-[350px] sm:w-[380px] md:w-[360px] lg:w-[456px] xl:w-[440px] items-center pt-10 ss:order-3 mm:order-3 sm:order-3 md:order-3 lg:order-3 xl:order-3"
            >
              <div>
                <div className="relative group bg-[#faf1c6] rounded-[100px] p-5 mb-10">
                  <div className="transition-all duration-500 ease-in-out h-[120px] flex absolute top-[-30px] right-[55px] gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-[10px] translate-y-[0px]">
                    <div>
                      <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-b-full">
                        <div className="border p-[5px] rounded-full">
                          <img
                            className="w-[18px] h-[18px] hover:cursor-pointer"
                            src={react}
                            alt="LinkedIn"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-b-full">
                        <div className="border p-[5px] rounded-full">
                          <img
                            className="w-[18px] h-[18px] hover:cursor-pointer"
                            src={redux}
                            alt="LinkedIn"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[20%_80%] items-center">
                    {/* <div className="flex justify-center items-center w-[75px] h-[75px] border rounded-full ">
                    90%
                  </div> */}
                    <div class="flex justify-center items-center w-[65px] h-[65px]">
                      <svg viewBox="0 0 36 36" class="circular-chart blue">
                        <path
                          class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          class="circle"
                          stroke-dasharray="90, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" class="percentage">
                          90%
                        </text>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <h4 className="text-xl font-semibold">
                        Frontend{" "}
                        <span className="text-[13px] text-slate">
                          (React, React Bootstrep)
                        </span>
                      </h4>
                      <p className="text-md text-slate">
                        React is use for building user interfaces, focusing on
                        creating reusable components.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group bg-[#ffd5df] rounded-[100px] p-5 mb-10">
                  <div className="transition-all duration-500 ease-in-out h-[120px] flex absolute top-[-30px] right-[55px] gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-[10px] translate-y-[0px]">
                    <div>
                      <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-b-full">
                        <div className="border p-[5px] rounded-full">
                          <img
                            className="w-[18px] h-[18px] hover:cursor-pointer"
                            src={html}
                            alt="LinkedIn"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-b-full">
                        <div className="border p-[5px] rounded-full">
                          <img
                            className="w-[18px] h-[18px] hover:cursor-pointer"
                            src={css}
                            alt="LinkedIn"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[20%_80%] items-center">
                    <div class="flex justify-center items-center w-[65px] h-[65px]">
                      <svg viewBox="0 0 36 36" class="circular-chart blue">
                        <path
                          class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          class="circle"
                          stroke-dasharray="95, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" class="percentage">
                          95%
                        </text>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <h4 className="text-xl font-semibold">
                        Designing{" "}
                        <span className="text-[13px] text-slate">
                          (Html, CSS)
                        </span>
                      </h4>
                      <p className="text-md text-slate">
                        Html and CSS are use for building daynamic user
                        interfaces.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group bg-[#d5f5ff] rounded-[100px] p-5">
                  <div className="transition-all duration-500 ease-in-out h-[120px] flex absolute top-[-30px] right-[55px] gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-[10px] translate-y-[0px]">
                    <div>
                      <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-b-full">
                        <div className="border p-[5px] rounded-full">
                          <img
                            className="w-[18px] h-[18px] hover:cursor-pointer"
                            src={chakra}
                            alt="LinkedIn"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center bg-white w-[35px] h-[40px] rounded-b-full">
                        <div className="border p-[5px] rounded-full">
                          <img
                            className="w-[18px] h-[18px] hover:cursor-pointer"
                            src={tailwind}
                            alt="LinkedIn"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[20%_80%] items-center">
                    <div class="flex justify-center items-center w-[65px] h-[65px]">
                      <svg viewBox="0 0 36 36" class="circular-chart blue">
                        <path
                          class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          class="circle"
                          stroke-dasharray="90, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" class="percentage">
                          90%
                        </text>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <h4 className="text-xl font-semibold">
                        CSS Library{" "}
                        <span className="text-[13px] text-slate">
                          (Chakra UI, Tailwind CSS)
                        </span>
                      </h4>
                      <p className="text-md text-slate">
                        Chakra and Tailwind are use for building daynamic user
                        interfaces insted of CSS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* education-section */}
      <div ref={resumeSectionRef} className="relative">
        <img
          className="w-[120px] h-[120px] left-[50px] bottom-[700px] absolute"
          src={bag}
          alt=""
        />
        <img
          className="w-[130px] h-[130px] left-[400px] bottom-[0px] absolute"
          src={book2}
          alt=""
        />
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-[36px] font-bold text-center"
        >
          What I <span className="text-primary">Achieve</span>
        </h1>

        {/* animation */}
        <div
          data-aos="fade-up"
          data-aos-duration="2200"
          className="flex justify-center"
        >
          <div className="w-[2px] h-[80px] bg-black"></div>
          <div className="ball w-[16px] h-[16px] absolute rounded-full bg-black"></div>
        </div>

        <div className="flex justify-center pt-7">
          <div
            data-aos="fade-up"
            data-aos-duration="2400"
            className="flex justify-center items-center w-[280px] h-[55px] border rounded-[30px]"
          >
            <div className="flex space-x-2">
              <button
                className={`w-[115px] h-[35px] font-semibold rounded-[15px] ${
                  activeButton === "button1"
                    ? "bg-black text-white"
                    : "bg-white text-[#777777]"
                }`}
                onClick={() => setActiveButton("button1")}
              >
                Education
              </button>
              <button
                className={`w-[115px] h-[35px] font-semibold rounded-[15px] ${
                  activeButton === "button2"
                    ? "bg-black text-white"
                    : "bg-white text-[#777777]"
                }`}
                onClick={() => setActiveButton("button2")}
              >
                Experience
              </button>
            </div>
          </div>
        </div>

        {activeButton === "button1" && (
          <div className="flex relative flex-wrap justify-center pt-10">
            <div className="pr-[30px] border-r-[1px]">
              <div
                data-aos="fade-right"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] ss:w-[280px] ss:h-[300px] mm:w-[320px] mm:h-[250px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px] mb-[150px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Master in Computer Application
                  <span className="text-[15px] text-[#555]">- Future</span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  My focus on doing MCA graduates in Future, See the rapid rise
                  of AI, machine learning, and cloud computing, MCA graduates
                  will be in demand for roles that involve building smart,
                  scalable, and efficient systems.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] right-[-30px] z-index-[-1]"></div>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] ss:w-[280px] ss:h-[260px] mm:w-[320px] mm:h-[230px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Higher Secondary
                  <span className="text-[15px] text-[#555]">- 70.54%</span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  I was completed my Higher Secondary schooling from Shree
                  Swaminarayan Gurukul vidyalaya, My time at Shree Swaminarayan
                  Gurukul helped build a solid base for my further studies.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] right-[-30px] z-index-[-1]"></div>
              </div>
            </div>

            <div className="w-[16px] h-[6px] bg-black border absolute ss:right-[0px] mm:right-[4px] sm:right-[0px] md:right-[52px] lg:right-[180px] xl:right-[751px] border-white"></div>
            <div className="w-[16px] h-[6px] bg-black border absolute ss:bottom-0 ss:left-[0px] mm:bottom-0 mm:left-[4px] sm:bottom-0 sm:left-[0px] md:bottom-0 md:left-[53px] lg:left-[180px] lg:bottom-0 xl:left-[752px] xl:bottom-0 border-white"></div>

            <div className="w-[100px] h-full absolute ss:bottom-[28.5%] mm:bottom-[29.8%] sm:bottom-[30.9%] md:bottom-[32.3%] lg:bottom-[32.3%] xl:bottom-[32%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2026-27
              </span>
            </div>

            <div className="w-[100px] h-full absolute ss:top-[-2.6%] mm:top-[-3.2%] sm:top-[-4%] md:top-[-4.9%] lg:top-[-4.9%] xl:top-[-9%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2022-25
              </span>
            </div>

            <div className="w-[100px] h-full absolute ss:top-[7%] mm:top-[7.4%] sm:top-[6.8%] md:top-[8.5%] lg:top-[8.5%] xl:top-[15%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2020-22
              </span>
            </div>

            <div className="w-[100px] h-full absolute ss:top-[32.9%] mm:top-[34%] sm:top-[33.8%] md:top-[36%] lg:top-[36%] xl:top-[38%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2018-20
              </span>
            </div>

            <div className="ps-[30px] border-l-[1px]">
              <div
                data-aos="fade-left"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] ss:w-[280px] ss:h-[260px] mm:w-[320px] mm:h-[230px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px] my-[150px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Bachelors in Computer Engineering
                  <span className="text-[15px] text-[#555]">- Running</span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  The Bachelors in Computer Applications (BCA) program at
                  Bhagwan Mahavir University, By 2025, I will graduate with the
                  tools needed to thrive in a fast-paced, tech-driven
                  environment.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] left-[-30px] z-index-[-1]"></div>
              </div>

              <div
                data-aos="fade-left"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] ss:w-[280px] ss:h-[270px] mm:w-[320px] mm:h-[230px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Primary School
                  <span className="text-[15px] text-[#555]">- A+ Grade</span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  I was completed my Primary Secondary schooling from Shree
                  Swaminarayan Gurukul vidyalaya, The school emphasizes values
                  such as leadership, ethics, and aiming to shape well-rounded
                  for future.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] left-[-30px] z-index-[-1]"></div>
              </div>
            </div>
          </div>
        )}

        {activeButton === "button2" && (
          <div className="flex relative flex-wrap justify-center pt-10">
            <div className="ss:order-2 mm:order-2 sm:order-2 md:order-2 lg:order-2 xl:order-1 pr-[30px] border-r-[1px]">
              <div
                data-aos="fade-right"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] mm:w-[320px] ss:w-[280px] ss:h-[280px] mm:h-[250px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px] my-[150px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Corenet Tech India
                  <span className="text-[15px] text-[#555]">
                    - Sr. Developer
                  </span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  eos maxime, recusandae saepe magnam molestiae velit commodi
                  eligendi sequi dolore, cumque tenetur reprehenderit?
                  Quibusdam, animi.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] right-[-30px] z-index-[-1]"></div>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] mm:w-[320px] ss:w-[280px] ss:h-[280px] mm:h-[250px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Corenet Tech India
                  <span className="text-[15px] text-[#555]">- Internship</span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  eos maxime, recusandae saepe magnam molestiae velit commodi
                  eligendi sequi dolore, cumque tenetur reprehenderit?
                  Quibusdam, animi.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] right-[-30px] z-index-[-1]"></div>
              </div>
            </div>

            <div className="w-[16px] h-[6px] bg-black border absolute ss:left-[-1px] mm:left-[4px] sm:left-[0px] md:left-[53px] lg:left-[180px] xl:left-[752px] border-white"></div>
            <div className="w-[16px] h-[6px] bg-black border absolute ss:right-[-1px] ss:bottom-0 mm:right-[4px] mm:bottom-0 sm:right-[0px] sm:bottom-0 md:right-[52px] md:bottom-0 lg:right-[180px] lg:bottom-0 xl:bottom-0 xl:left-[752px] border-white"></div>

            <div className="w-[100px] h-full absolute ss:bottom-[30.1%] mm:bottom-[30.5%] sm:bottom-[31%] md:bottom-[32.5%] lg:bottom-[32.5%] xl:bottom-[32%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2028-30
              </span>
            </div>

            <div className="w-[100px] h-full absolute ss:top-[-3.5%] mm:top-[-3.8%] sm:top-[-4%] md:top-[-5%] lg:top-[-5%] xl:top-[-9%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2026-28
              </span>
            </div>

            <div className="w-[100px] h-full absolute ss:top-[6%] mm:top-[6.4%] sm:top-[6.8%] md:top-[8.5%] lg:top-[8.5%] xl:top-[15%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2025-26
              </span>
            </div>

            <div className="w-[100px] h-full absolute ss:top-[32.6%] mm:top-[33.3%] sm:top-[33.8%] md:top-[36%] lg:top-[36%] xl:top-[38%] flex items-center justify-center xl:rotate-[270deg] z-[1]">
              <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
                2024-25
              </span>
            </div>

            <div className="ss:order-1 mm:order-1 sm:order-1 md:order-1 lg:order-1 xl:order-2 ps-[30px] border-l-[1px]">
              <div
                data-aos="fade-left"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] ss:w-[280px] ss:h-[280px] mm:w-[320px] mm:h-[250px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px] mb-[150px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Corenet Tech India
                  <span className="text-[15px] text-[#555]">- Team Leader</span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  eos maxime, recusandae saepe magnam molestiae velit commodi
                  eligendi sequi dolore, cumque tenetur reprehenderit?
                  Quibusdam, animi.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] left-[-30px] z-index-[-1]"></div>
              </div>

              <div
                data-aos="fade-left"
                data-aos-duration="2400"
                className="relative bg-[#f7f5fb] border rounded-[30px] ss:w-[280px] ss:h-[280px] mm:w-[320px] mm:h-[250px] sm:w-[380px] sm:h-[230px] md:w-[617px] md:h-[160px] lg:w-[617px] lg:h-[160px] xl:w-[617px] xl:h-[160px] p-[30px]"
              >
                <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                  Corenet Tech India
                  <span className="text-[15px] text-[#555]">
                    - Jr. Developer
                  </span>
                </h4>
                <p className="text-[14px] text-[#495461] tracking-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  eos maxime, recusandae saepe magnam molestiae velit commodi
                  eligendi sequi dolore, cumque tenetur reprehenderit?
                  Quibusdam, animi.
                </p>
                <div className="w-[30px] h-[2px] bg-black absolute top-[50%] left-[-30px] z-index-[-1]"></div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="flex relative flex-wrap justify-center pt-10">
          <div className="pr-[30px] border-r-[1px]">
            <div className="relative border rounded-[30px] w-[617px] h-[160px] p-[30px] mb-[150px]">
              <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                Master in Comuter Engineering
                <span className="text-[15px] text-[#555]">- First Class</span>
              </h4>
              <p className="text-[14px] text-[#495461] tracking-[1px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                eos maxime, recusandae saepe magnam molestiae velit commodi
                eligendi sequi dolore, cumque tenetur reprehenderit? Quibusdam,
                animi.
              </p>
              <div className="w-[30px] h-[2px] bg-black absolute top-[50%] right-[-30px] z-index-[-1]"></div>
            </div>

            <div className="relative border rounded-[30px] w-[617px] h-[160px] p-[30px]">
              <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                Master in Comuter Engineering
                <span className="text-[15px] text-[#555]">- First Class</span>
              </h4>
              <p className="text-[14px] text-[#495461] tracking-[1px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                eos maxime, recusandae saepe magnam molestiae velit commodi
                eligendi sequi dolore, cumque tenetur reprehenderit? Quibusdam,
                animi.
              </p>
              <div className="w-[30px] h-[2px] bg-black absolute top-[50%] right-[-30px] z-index-[-1]"></div>
            </div>
          </div>

          <div className="w-[16px] h-[6px] bg-black border absolute border-white"></div>
          <div className="w-[16px] h-[6px] bg-black border absolute bottom-0 border-white"></div>

          <div className="w-[100px] h-full absolute bottom-[32%] flex items-center justify-center rotate-[270deg] z-[1]">
            <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
              2022-24
            </span>
          </div>

          <div className="w-[100px] h-full absolute top-[-9%] flex items-center justify-center rotate-[270deg] z-[1]">
            <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
              2022-24
            </span>
          </div>

          <div className="w-[100px] h-full absolute top-[15%] flex items-center justify-center rotate-[270deg] z-[1]">
            <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
              2022-24
            </span>
          </div>

          <div className="w-[100px] h-full absolute top-[38%] flex items-center justify-center rotate-[270deg] z-[1]">
            <span className="bg-black text-white border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[12px]">
              2022-24
            </span>
          </div>

          <div className="ps-[30px] border-l-[1px]">
            <div className="relative border rounded-[30px] w-[617px] h-[160px] p-[30px] my-[150px]">
              <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                Master in Comuter Engineering
                <span className="text-[15px] text-[#555]">- First Class</span>
              </h4>
              <p className="text-[14px] text-[#495461] tracking-[1px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                eos maxime, recusandae saepe magnam molestiae velit commodi
                eligendi sequi dolore, cumque tenetur reprehenderit? Quibusdam,
                animi.
              </p>
              <div className="w-[30px] h-[2px] bg-black absolute top-[50%] left-[-30px] z-index-[-1]"></div>
            </div>

            <div className="relative border rounded-[30px] w-[617px] h-[160px] p-[30px]">
              <h4 className="mb-[8px] text-[18px] font-semibold text-[#111a24] tracking-[1px]">
                Master in Comuter Engineering
                <span className="text-[15px] text-[#555]">- First Class</span>
              </h4>
              <p className="text-[14px] text-[#495461] tracking-[1px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                eos maxime, recusandae saepe magnam molestiae velit commodi
                eligendi sequi dolore, cumque tenetur reprehenderit? Quibusdam,
                animi.
              </p>
              <div className="w-[30px] h-[2px] bg-black absolute top-[50%] left-[-30px] z-index-[-1]"></div>
            </div>
          </div>
        </div> */}
      </div>

      {/* project-section */}
      <div ref={projectsSectionRef} className="pt-[100px]">
        <img className="w-[130px] h-[130px] absolute" src={notepen} alt="" />
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-[36px] font-bold text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </h1>

        {/* animation */}
        <div
          data-aos="fade-up"
          data-aos-duration="2200"
          className="flex justify-center"
        >
          <div className="w-[2px] h-[80px] bg-black"></div>
          <div className="ball w-[16px] h-[16px] absolute rounded-full bg-black"></div>
        </div>

        <div className="flex justify-center gap-8 flex-wrap pt-[200px]">
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-delay="500"
            className="relative ss:mb-[130px] mm:mb-[130px] sm:mb-[130px] md:mb-[130px] lg:mb-[0px] xl:mb-[0px] ss:w-[305px] ss:h-[350px] mm:w-[360px] mm:h-[300px] sm:w-[415px] sm:h-[300px] md:w-[415px] md:h-[300px] lg:w-[415px] lg:h-[300px] xl:w-[415px] xl:h-[300px] px-[30px] pb-[30px] pt-[180px] border rounded-[30px]"
          >
            <div className="overflow-hidden">
              <a
                href="https://statuesque-mooncake-014773.netlify.app"
                target="blank"
              >
                <img
                  className="absolute ss:w-[245px] ss:h-[280px] mm:w-[300px] mm:h-[280px] sm:w-[355px] sm:h-[280px] md:w-[355px] md:h-[280px] lg:w-[355px] lg:h-[280px] xl:w-[355px] xl:h-[280px] rounded-[30px] top-[-130px] object-cover ss:object-center mm:object-left sm:object-left md:object-left lg:object-left xl:object-left transition-transform duration-300 ease-in-out hover:scale-105"
                  src={end}
                  alt=""
                />
              </a>
            </div>
            <h3 className="tracking-[0.03rem] text-[18px] font-semibold ">
              EndShop - eCommerce Template
            </h3>
            <p className="text-[14px] tracking-[0.03rem] text-[#495461]">
              Create this project using React, Redux, and Chakra UI, In this
              project there was a Login and Signin Functionality and Add to Cart
              functionality.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="relative ss:mb-[130px] mm:mb-[130px] sm:mb-[130px] md:mb-[130px] lg:mb-[0px] xl:mb-[0px] ss:w-[305px] ss:h-[350px] mm:w-[360px] mm:h-[300px] sm:w-[415px] sm:h-[300px] md:w-[415px] md:h-[300px] lg:w-[415px] lg:h-[300px] xl:w-[415px] xl:h-[300px] px-[30px] pb-[30px] pt-[180px] border rounded-[30px]"
          >
            <a href="https://sparkly-jelly-266683.netlify.app" target="blank">
              <img
                className="absolute ss:w-[245px] ss:h-[280px] mm:w-[300px] mm:h-[280px] sm:w-[355px] sm:h-[280px] md:w-[355px] md:h-[280px] lg:w-[355px] lg:h-[280px] xl:w-[355px] xl:h-[280px] rounded-[30px] top-[-130px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src={life}
                alt=""
              />
            </a>
            <h3 className="tracking-[0.03rem] text-[18px] font-semibold ">
              triablo - eCommerce Template
            </h3>
            <p className="text-[14px] tracking-[0.03rem] text-[#495461]">
              Create this project using React and Tailwind CSS, In this project
              there was a React Routing functionality and On Scroll Animation.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-delay="500"
            className="relative mm:mb-[130px] sm:mb-[130px] md:mb-[130px] lg:mb-[0px] xl:mb-[0px] ss:w-[305px] ss:h-[350px] mm:w-[360px] mm:h-[300px] sm:w-[415px] sm:h-[300px] md:w-[415px] md:h-[300px] lg:w-[415px] lg:h-[300px] xl:w-[415px] xl:h-[300px] px-[30px] lg:mt-[150px] xl:mt-[0px] pb-[30px] pt-[180px] border rounded-[30px] "
          >
            <img
              className="absolute ss:w-[245px] ss:h-[280px] mm:w-[300px] mm:h-[280px] sm:w-[355px] sm:h-[280px] md:w-[355px] md:h-[280px] lg:w-[355px] lg:h-[280px] xl:w-[355px] xl:h-[280px] rounded-[30px] top-[-130px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              src={covid}
              alt=""
            />
            <h3 className="tracking-[0.03rem] text-[18px] font-semibold ">
              CovidCare - Social Template
            </h3>
            <p className="text-[14px] tracking-[0.03rem] text-[#495461]">
              Create this project using Html, Css, and Bootstrep, This project
              is based on User Interface.
            </p>
          </div>
        </div>
      </div>

      {/* idea-section */}
      <div className="bg mt-[150px] h-[580px] flex justify-center items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="w-[700px] h-[340px]"
        >
          <div className="flex justify-center">
            <h1 class="mb-[16px] text-[35px] text-white font-bold tracking-[0.03rem]">
              Good Idea
            </h1>
          </div>
          <div className="flex justify-center">
            <h4 className="mb-[16px] text-[20px] font-semibold text-white tracking-[0.03rem]">
              Teamwork and Collaboration?
            </h4>
          </div>
          <div className="flex justify-center">
            <p className="text-[15px] font-light text-white tracking-[0.03rem] pb-5 flex justify-center">
              Let's collaborate to achieve more things in this industry.
            </p>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="circal flex items-center justify-center w-[130px] h-[130px] bg-[white] rounded-full">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text fill="#000" fontSize="12" fontWeight="semibold">
                    <textPath
                      href="#circlePath"
                      startOffset="0"
                      textAnchor="middle"
                    >
                      About Me - About Me - About Me - About Me - About Me -
                      About Me - About Me About Me
                    </textPath>
                  </text>
                </svg>
                <div className="text-black text-xl font-bold">
                  <RxArrowTopRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer-section */}
      <div className="mt-[50px]  bg-[#f7f5fb]">
        <div className="flex h-[50px] items-center justify-between">
          <div className="text-[15px] sm:ps-2 md:ps-[100px] lg:ps-[100px] xl:ps-[100px] font-medium text-[#777] leading-[30px] tracking-[0.03rem]">
            © <span>024 Tirth, All Rights Reserved.</span>
          </div>
          <div>
            <div className="flex sm:pe-2 md:pe-[100px] lg:pe-[100px] xl:pe-[100px] gap-2">
              <div>
                <div className="flex justify-center items-center bg-white border  w-[35px] h-[35px] rounded-full">
                  <a
                    href="https://www.linkedin.com/in/tirth-kalathiya-286b68269/"
                    target="blank"
                  >
                    <img
                      className="w-[18px] h-[18px] hover:cursor-pointer"
                      src={linkdin}
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center bg-white border  w-[35px] h-[35px] rounded-full">
                  <a href="https://github.com/tirth6105" target="blank">
                    <img
                      className="w-[18px] h-[18px] hover:cursor-pointer"
                      src={github}
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center bg-white border  w-[35px] h-[35px] rounded-full">
                  <img
                    className="w-[18px] h-[18px] hover:cursor-pointer"
                    src={insta}
                    alt="Instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {showButton && (
        <button
          type="button"
          onClick={backToTop}
          style={{
            // borderRadius: "50%",
            backgroundColor: "white",
            // borderRadius: "50%",
            border: "3px solid transparent",
            borderImage: `conic-gradient(#f41a4a ${scrollProgress}%, #ffffff ${scrollProgress}% 100%) 1`,
          }}
          className={` ${
            showButton
              ? `progress-cirle inline-block base:hidden ss:hidden mm:hidden sm:hidden rt:block md:block :block xl:block rt:fixed md:fixed lg:fixed lgxl:fixed rt:bottom-[100px] rt:left-[550px] md:bottom-[110px] md:left-[700px] lg:bottom-[100px] lg:left-[950px] xl:bottom-[80px] xl:left-[1360px] p-3 bg-white text-primary font-medium text-xs transition-all duration-150 ease-in-out`
              : `hidden`
          }`}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
      )} */}

      {showButton && (
        <button
          type="button"
          onClick={backToTop}
          className={`kal relative inline-block base:hidden ss:hidden mm:hidden sm:hidden rt:block md:block :block xl:block rt:fixed md:fixed lg:fixed xl:fixed rt:bottom-[100px] rt:left-[550px] md:bottom-[110px] md:left-[700px] lg:bottom-[100px] lg:left-[950px] xl:bottom-[80px] xl:left-[1380px] p-3  text-primary font-medium text-xs  shadow-md transition duration-150 ease-in-out`}
          style={{
            //   // borderRadius: "50%",
            //   backgroundColor: "white",
            //   // borderRadius: "50%",
            //   border: "3px solid transparent",
            borderImage: `conic-gradient(#f41a4a ${scrollProgress}%, #ffffff ${scrollProgress}% 100%) 1`,
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4 rounded"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;
