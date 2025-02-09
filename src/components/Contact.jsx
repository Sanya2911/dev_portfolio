import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}
       className="flex flex-col items-center text-center tracking-tight space-y-6">

        <div className="flex items-center space-x-3">
          <SiGmail className="w-6 h-6 text-red-500" />
          <a
            href="mailto:sanyasaeed2911@gmail.com"
            className="text-lg text-neutral-300 hover:text-red-400 transition-all"
          >
            sanyasaeed2911@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-purple-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.14 2 5 5.14 5 9c0 4.42 5 11 7 13 2-2 7-8.58 7-13 0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"></path>
          </svg>
          <p className="text-lg text-neutral-300">Bangalore, India</p>
        </div>

        <p className="mt-6 text-lg text-neutral-400">
          Feel free to reach out for collaborations, projects, or just to say hi! 😊
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
