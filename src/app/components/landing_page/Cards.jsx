"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variant";
import Image from "next/image";
const Cards = () => {
  return (
    <section className="flex">
      <div className="container flex flex-row">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 mb-12 gap-y-12 "
        >
          <div className="flex-col place-self-center mb-12">
            <h2 className="text-6xl font-bold heading-gradient">
              Explore Features
            </h2>
            <span className="font-bold text-lg">
              Take a sneak peek into the engaging world that awaits you.
            </span>
          </div>
          {/*image */}
          <div className=" flex justify-self-center group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* overlay*/}

            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
            {/*img */}
            <div className=" group-hover:scale-12font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-6005 transition-all duration-500">
              <Image src="/image/img2.png" width={300} height={300} />
            </div>
            {/*pretitle */}
            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className=" text-3xl text-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Courses
              </span>
            </div>
            {/* title*/}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className=" text-3xl text-white">Learn Programming</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex ml-20 mt-36 gap-x-10 max-h-[320px]"
        >
          {/*image*/}
          <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* overlay*/}

            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
              {" "}
            </div>
            {/*img */}
            <div className=" group-hover:scale-12font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-6005 transition-all duration-500  ">
              <Image src="/image/img2.png" width={300} height={300} />
            </div>
            {/*pretitle */}
            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className=" text-3xl text-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Avatar
              </span>
            </div>
            {/* title*/}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className=" text-2xl text-white">Create your persona</span>
            </div>
          </div>
          {/*image*/}
          <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* overlay*/}

            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
              {" "}
            </div>
            {/*img */}
            <div className=" group-hover:scale-12font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-6005 transition-all duration-500  ">
              <Image src="/image/img1.png" width={300} height={300} />
            </div>
            {/*pretitle */}
            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className=" text-3xl text-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Achievements
              </span>
            </div>
            {/* title*/}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className=" text-2xl text-white">Rewards for Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
