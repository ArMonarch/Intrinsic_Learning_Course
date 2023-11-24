import Image from "next/image";

const AboutSection = () => {
    return (
      <section className="text-[#ADB7bE] ">
        <div className="bg-[#151515] rounded-full text-center px-2 ">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px 4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image src="/image/about-image.png" width={650} height={650} alt=""/>
            <div>
              <h2 className="text-6xl font-bold text-white mb-4 sm-2xl">
                About Us
              </h2>
              <p className=" text-xl font-sans ">
                Our online learning platform is not just about courses; it&apos;s an immersive experience designed to make learning fun and rewarding.
                Engage in friendly competition with our leaderboard, where you can track your progress and see how you stack up against others. 
                Dive into interactive learning games that turn studying into an adventure.
                Connect with a community of learners, collaborate on projects, and elevate your understanding of the subject matter.
                At Learn , we believe in making education a thrilling journey, and we invite you to join us in redefining the way you learn. 
                Welcome to a world where knowledge is power and enjoyment is key!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;