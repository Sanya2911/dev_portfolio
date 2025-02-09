import { RiReactjsLine } from "react-icons/ri";
import { BiLogoPhp, BiLogoPython, BiLogoPostgresql, BiLogoJava } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiCss3, SiMysql } from "react-icons/si"; // Corrected MySQL import
import {motion} from "framer-motion";

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">
            Technologies
        </h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:1}}
        transition={{duration:1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-sky-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPython className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-indigo-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoJava className="text-7xl text-red-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPhp className="text-7xl text-blue-600" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-400" /> {/* Corrected MySQL icon */}
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-teal-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl text-blue-500" />
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies;
