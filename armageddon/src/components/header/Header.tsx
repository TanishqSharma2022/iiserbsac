"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { IconCalendarEvent, IconHome, IconMessage, IconUser, IconUsersGroup } from "@tabler/icons-react";
import ArmaIcon from "../../../assets/images/arma.png"


const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
   
    {
      name: "Events",
      link: "/events",
      icon: (
        <IconCalendarEvent className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Team",
      link: "/team",
      icon: (
        <IconUsersGroup className="h-4 w-4 text-white" />
      ),
    }
  ];


export default function Header () {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;      
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      
    }
  });

  return (
    <>
    
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit min-w-96 fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-4  items-center justify-center space-x-4 px-6 mb-4 ",
        )}
      >
        <Image
        height={50}
        width={50}
        src={ArmaIcon}
        alt="arma logo"
        />
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "border text-sm font-medium relative border-neutral-200 border-white/[0.2] text-white px-4 py-2 rounded-full"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            <span className="absolute inset-x-0  mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />

          </Link>
        ))}
  
      </motion.div>
    </AnimatePresence>
    
    </>
  );
};
