"use client"; import {motion} from "motion/react";
export function Reveal({children,className=""}:{children:React.ReactNode,className?:string}){return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-70px'}} transition={{duration:.65,ease:[.22,1,.36,1]}}>{children}</motion.div>}
