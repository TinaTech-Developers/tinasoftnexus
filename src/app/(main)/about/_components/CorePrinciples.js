"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function CorePrinciples() {
  return (
    <>
      <div className="flex flex-col justify-center mb-10 md:my-10 mx-6">
        {/* <motion.h1
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="md:text-3xl text-blue-900 text-2xl capitalize font-semibold text-start"
        >
          Core Values
        </motion.h1> */}
      </div>
      <div className="flex flex-col gap-10  mx-6">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-28 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="md:h-[75px] h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Vision</h1>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    "To be the leading IT solutions provider in Zimbabwe, renowned for excellence, reliability, and sustainability, connecting people, businesses, and technologies to unlock limitless possibilities.",
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-28 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="md:h-[75px] h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Mission</h1>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    " At TinaSoft Nexus, we harness the power of technology to enrich lives, drive business success, and bridge the digital divide, providing customer-centric IT solutions with integrity, passion, and excellence.",
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-28 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="md:h-[75px] h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">
              Unique Selling Proposition (USP)
            </h1>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    ": TinaSoft Nexus connects Zimbabwe to the global digital landscape, delivering tailored IT solutions that drive growth, innovation, and social impact.",
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Core Values</h1>
            <h2 className="py-1 pt-4 text-blue-500">Customer Focus</h2>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    ": We prioritize our clients' needs, delivering exceptional service and value.",
                }}
              />
            </div>

            <h2 className="py-1 pt-4 text-blue-500">Innovation</h2>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    ": We embrace cutting-edge technologies and creative problem-solving.",
                }}
              />
            </div>

            <h2 className="py-1 pt-4 text-blue-500">Integrity</h2>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    ": We uphold transparency, ethics, and accountability.",
                }}
              />
            </div>

            <h2 className="py-1 pt-4 text-blue-500">Collaboration</h2>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings: ": We foster partnerships and teamwork.",
                }}
              />
            </div>

            <h2 className="py-1 pt-4 text-blue-500">Sustainability</h2>
            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    " : We strive for environmentally responsible and socially impactful solutions.",
                }}
              />
            </div>

            <div className="text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  strings:
                    "  At TinaSoft Nexus, our core principles guide everything we do. We are committed to delivering exceptional value to our clients through a customer-centric approach, leveraging innovation and technology to drive business success. Our integrity and ethical standards ensure transparency and accountability in all our interactions. We believe in the power of collaboration, fostering strong partnerships with our clients and within our team. Finally, we are dedicated to sustainability, ensuring that our solutions not only meet today's needs but also contribute to a better future for all.",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CorePrinciples;
