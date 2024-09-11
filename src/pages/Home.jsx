import data from "../Data/My_data.json";
import { TypeAnimation } from "react-type-animation";
// import Profile from "../assets/Images/Profile.jpeg";
import "../pages/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";
import { BASE_URL_IMAGE_FOLDER } from "../constan";

library.add(faArrowRight)


export default function Home() {
  return (
    <div className="h-[60vh] sm:h-[calc(100dvh_-_96px)] w-full flex justify-center items-center ">
      <div className="mt-5 grid  gap-2 w-full md:grid-cols-[2fr_1fr]  overflow-hidden place-items-center">
        <div className="h-full w-full flex-2  text-left grid grid-cols-1 content-center  ">
          <div className="flex justify-center">
            <TypeAnimation
              sequence={[`Hi, I am `]}
              speed={30}
              cursor={false}
              className="text-[1.5rem] md:text-[2rem] font-bold mr-2 uppercase"
            />
            <TypeAnimation
              sequence={[500, ` ${data.firstname}`]}
              speed={30}
              cursor={false}
              className="text-[1.5rem] md:text-[2rem] font-bold  text-yellow-500 uppercase"
            />
          </div>
          <div className="my-1 flex justify-center text-[14px]">
            <TypeAnimation
              sequence={[
                500,
                `${data.hederTag[0]}`,
                1000,
                `${data.hederTag[1]}`,
                1000,
                `${data.hederTag[2]}`,
                500,
              ]}
              speed={30}
              cursor={true}
              repeat={Infinity}
              className="text-[1.2rem] md:text-[2rem] font-bold uppercase text-emerald-700"
            />
          </div>
          <div>
            <p className="text-wrap text-center text-xs md:text-base font-medium">{`${data.Bio}`}</p>
          </div>
          <div className="my-5  grid justify-center items-center">
            <Link
              className="p-2 m-0 font-medium  rounded-lg bg-lime-500 hover:bg-lime-700 duration-200 transition-all uppercase "
              to={data["resume-link"]} 
              target="_blank"
            >
              Checkout my CV
              <FontAwesomeIcon className="mx-2 align-middle" icon="fa-solid fa-arrow-right " />
            </Link>
          </div>
        </div>
        <div className="sm:max-w-[21rem] w-full h-full flex justify-center items-center order-first md:order-last">
          <div className=" w-[12rem] h-[12rem] rounded-[50%] overflow-hidden md:w-[20rem] md:h-[20rem] ">
            <img
              className="h-full w-full scale-125 bg-cover"
              src={BASE_URL_IMAGE_FOLDER+"Profile.jpeg"}
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
