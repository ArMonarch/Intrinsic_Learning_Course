"use client";

import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-6 text-4xl sm-text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Level up your
            </span>
            <span>
              <Typewriter options={{
                strings: ["Learning Adventure", "Destiny", "Ar Demon"],
                autoStart: true,
                loop: true,
              }} />
            </span>
            <br></br>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-justify my-">
            Our gamified online platform transforms education into an immersive
            adventure. Enhance your learning skills with our innovative gamified
            learning platform where education meets excitement. Earn badges,
            climb the leaderboard and turn the pursuit of knowledge into
            thrilling adventure.
          </p>

          <div>
            <button className="px-10 py-4 w-full text-2xl sm:w-fit rounded-full mr-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Start Now
            </button>
          </div>
        </div>
        <div className=" col-span-5 justify-self-end mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/image/online.png"
              alt="online"
              className="justify-self-end absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
