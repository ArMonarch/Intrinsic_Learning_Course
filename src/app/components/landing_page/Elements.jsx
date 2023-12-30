"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/app/variant";

const services = [
  {
    name: "Python Course",
    description:
      "Our platform offers a structured and interactive Python learning course, As users navigate through the course, correctly answering quizzes earns them experience points. ",
  },
  {
    name: " Achievement System",
    description:
      " Recognizing and celebrating user accomplishments is at the core of our dynamic achievement system. As users progress through tasks and milestones, they are rewarded with visually appealing achievements.",
  },
  {
    name: "Customizable Avatars",
    description:
      "Elevate the user experience with our unique customizable avatars feature. This tool empowers users to personalize their digital presence within the learning platform.",
  },
];

const Elements = () => {
  return (
    <section className="mt-56 flex items-center" id="services">
      <div class="custom-shape-divider-top-1703863178">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="ml-32">
        <div className="grid grid-cols-2 gap-20 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-quizzes lg:bg-bottom bg-no-repeat mb-12 lg:mb-0 "
          >
            <text className="absolute  text-center ml-20">
              <div className="font-bold text-5xl mb-6 tracking-[10%] heading-gradient">
                Features included
              </div>
              <h3 className=" font-primary text-[26px] leading-[46px] text-white font-extralight ">
                Learn, Achieve, Personalize
              </h3>
            </text>
            <div className="bg-no-repeat mix-blend-lighten mt-20">
              <Image src="/image/quizzes.png" width={550} height={550} />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 mr-20 h-[146px] mb-[38px] flex text-right mt-12"
                    key={index}
                  >
                    <div className="max-w-[500px]">
                      <h4 className="text-[20px] tracking-wider text-white font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="f text-white ont-secondary leading-tight ">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Elements;
