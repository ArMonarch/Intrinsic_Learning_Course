"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import "./App.css";

const AboutSection = () => {
  return (
    <section className="text-[#ADB7bE] m-20">
      <div className="bg-[#121212] rounded-[100px] text-center   p-1 border-[#7B2C8B] border-4">
        <div className="flex flex-row justify-center items-center gap-10 px-32">
          <Image src="/image/about-image.png" width={500} height={500} />
          <div>
            <h2 className="text-5xl font-bold heading-gradient">About Us </h2>
            <p className=" text-lg font-sans text-center flex-shrink ">
              Our online learning platform is not just about courses; It's an
              immersive experience designed to make learning fun and rewarding.
              Dive into our interactive Python courses, where learning is not
              just informative but also fun. Earn achievements after completing
              tasks and turn the pursuit of knowledge into thrilling adventure.
              Welcome to a world where knowledge is power and enjoyment is key!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
