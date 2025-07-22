import Image from "next/image";
import ExperienceItem from "./ExperienceItem";
import DotGrid from './DotGrid';

const About = () => {
  return (
    <section id="about" className="py-24">
      
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "0 16px",
        }}
      >
        {/* Flexbox for text and photo - responsive layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          {/* Photo Section */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <Image
              src="/images/IMG_0603.jpg"
              alt="Brandon Wong"
              width={200}
              height={200}
              className="shadow-lg rounded-full"
            />
          </div>

          {/* Text Section */}
          <div
            className="text-left order-2 md:order-1"
            style={{
              width: "100%",
              maxWidth: "400px",
              flexShrink: 0, // Prevent shrinking
            }}
          >
            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Brandon Wong
            </h3>
            <h4 className="text-xl mb-4 text-gray-700 dark:text-gray-300">
              Software Engineer @ Gap Inc.
            </h4>
            <div className="mt-8">
              <p className="text-lg text-black dark:text-gray-500 mb-4">
                Hello! I'm a software engineer, rock climber, and car enthusaist based in LA.
              </p>
              <p className="text-lg text-black dark:text-gray-500 mb-4">
                I have always been curious with the intersection of technology and its impact on the world around us.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl md:text-left font-bold mb-4 text-black dark:text-white">
          Experience
        </h3>

        {/* Experience Items */}
        <div className="space-y-6">
          <ExperienceItem
            company="Gap Inc."
            position="Software Engineer"
            description="Developing scalable solutions for a diverse set of e-commerce platforms"
            imageSrc="/images/gapinc-logo.png"
            hoverImageSrc="/images/gapinc-banner.webp"
            duration="2022 - Present"
          />
          <ExperienceItem
            company="PassiveLogic"
            position="Jr. Software Engineer"
            description="Worked on autonomous building control systems"
            imageSrc="/images/passivelogic-logo.jpg"
            hoverImageSrc="/images/passivelogic-banner.png"
            duration="2021 - 2022"
          />

          <hr className="border-t border-gray-300 dark:border-gray-600 mt-8" />

            <ExperienceItem
            company="University of Utah"
            position=""
            description="B.S. Computer Science"
            imageSrc="/images/utah-logo.svg"
            hoverImageSrc="/images/utah-banner.jpg"
            duration="2017 - 2021"
          />
        </div>
        
      </div>
    </section>
  );
};

export default About;
