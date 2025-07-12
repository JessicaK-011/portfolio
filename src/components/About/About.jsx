import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.svg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          {/* Combined Greeting and Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Hi, I am Jessica Kamal
          </h1>

         {/* Typing Effect Line */}
<h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#8245ec] leading-snug">
  <span className="text-white">I am a </span>
  <ReactTypingEffect
    text={[
      'Full-Stack Developer',
      'NLP Enthusiast',
      'Competitive Programmer',
      'UI/UX Learner',
    ]}
    speed={100}
    eraseSpeed={50}
    typingDelay={500}
    eraseDelay={2000}
    cursorRenderer={(cursor) => (
      <span className="text-[#8245ec]">{cursor}</span>
    )}
    displayTextRenderer={(text, i) => (
      <span className="whitespace-nowrap">{text}</span>
    )}
  />
</h3>

          {/* About Paragraph */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed">
            I’m currently pursuing an Integrated B.Tech + M.Tech in Information Technology from IIIT Gwalior (2022–2027).
I'm passionate about solving real-world problems through code, particularly in the fields of Artificial Intelligence (AI), Machine Learning (ML), Natural Language Processing (NLP) and full-stack development.
I’m also dedicated to strengthening my problem-solving skills through consistent practice of Data Structures and Algorithms (DSA) and competitive programming.
I’m always looking forward to building solutions that are practical, scalable, and ready for real-world use.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1M-2Spt4aeG45IGu-VMahciUxQXLA4YQw/view?usp=sharing"  // <- Update this
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0">
          <Tilt
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Jessica Kamal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
