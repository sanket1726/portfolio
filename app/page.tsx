"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import {
  Code,
  Database,
  Cloud,
  Monitor,
  Github,
  Linkedin,
  BookOpen,
  Server,
  Box,
  Terminal,
  CircleSlash2,
} from "lucide-react";

const technologies = [
  { name: "React", icon: CircleSlash2, color: "text-blue-400" },
  { name: "Node.js", icon: Server, color: "text-green-400" },
  { name: "Next.js", icon: Box, color: "text-white" },
  { name: "TypeScript", icon: Code, color: "text-blue-500" },
  { name: "Git", icon: Github, color: "text-orange-400" },
  { name: "AWS", icon: Cloud, color: "text-yellow-500" },
  { name: "Docker", icon: Box, color: "text-blue-400" },
  { name: "Terminal", icon: Terminal, color: "text-green-400" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Social Links */}
      <div className="social-links">
        <motion.a
          href="https://github.com/sanket1726"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sanket-benade-146b26142/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://medium.com/@er.benadesanket"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <BookOpen className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <meshStandardMaterial
                color="#ffffff"
                wireframe
                transparent
                opacity={0.1}
              />
            </Sphere>
          </Canvas>
        </div>

        <div className="z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-6"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            Senior Software Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web
            technologies
          </motion.p>
        </div>

        <div className="scroll-indicator">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm text-gray-400"
          >
            Scroll to explore
          </motion.span>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center mb-24"
          >
            Technology Stack
          </motion.h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="tech-item"
              >
                <tech.icon className={`w-12 h-12 mb-4 ${tech.color}`} />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center mb-24"
          >
            Professional Journey
          </motion.h2>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    Senior Software Engineer
                  </h3>
                  <p className="text-lg text-gray-400">
                    Spring Computing Technologies, Pune
                  </p>
                </div>
                <p className="text-gray-500">May 2022 – Aug 2024</p>
              </div>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">•</span>
                  Architected and implemented scalable web & desktop
                  applications using React.js and Electron.js
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">•</span>
                  Led development of MS Teams/Slack plugins, improving team
                  collaboration efficiency by 40%
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">•</span>
                  Optimized application performance, reducing load times by 60%
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  React.js
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Electron.js
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  WebRTC
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Socket.io
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Software Engineer
                  </h3>
                  <p className="text-lg text-gray-400">
                    Atliq Technologies, Vadodara
                  </p>
                </div>
                <p className="text-gray-500">Oct 2021 – May 2022</p>
              </div>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">•</span>
                  Developed responsive web applications with Next.js, ensuring
                  optimal mobile experience
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">•</span>
                  Integrated Stripe payment system, processing over 1000+
                  transactions monthly
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">•</span>
                  Implemented TypeScript for enhanced code reliability and
                  maintainability
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Stripe
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Node.js
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    Jr. DevOps Engineer
                  </h3>
                  <p className="text-lg text-gray-400">Aventri, Pune</p>
                </div>
                <p className="text-gray-500">Nov 2020 – Aug 2021</p>
              </div>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-400">•</span>
                  Managed AWS infrastructure for SaaS applications
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">•</span>
                  Implemented automated deployment pipelines using Jenkins
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">•</span>
                  Set up monitoring systems for production applications
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  AWS
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Jenkins
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Puppet
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Apache
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    Software Developer
                  </h3>
                  <p className="text-lg text-gray-400">
                    Ghodawat Softech, Kolhapur
                  </p>
                </div>
                <p className="text-gray-500">May 2020 – October 2020</p>
              </div>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  Developed E-Learning platform frontend using React.js
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  Implemented pixel-perfect UI with responsive design
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  Optimized application performance and network load
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  React.js
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                  Redux
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
