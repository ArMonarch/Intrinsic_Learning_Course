"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="banner">
      <div className="grid grid-cols-1 mt-2 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-6 text-4xl sm-text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Level up your {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "learning adventure",
                1000,

                // wait 1s before replacing "Mice" with "Hamsters"

                ,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-justify ">
            Our gamified online platform transforms education into an immersive
            adventure. Enhance your learning skills with our innovative gamified
            learning platform where education meets excitement. Join us and
            unlock the doors to a world where education meets excitement.
          </p>

          <div>
            <button className="px-10 py-4 w-full text-2xl sm:w-fit rounded-full mr-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Start Now
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <Image
            src="/image/online.png"
            alt="online"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
