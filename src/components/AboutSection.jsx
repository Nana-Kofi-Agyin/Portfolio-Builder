import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaGithub } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      {/* Fun facts */}
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>Can debug code and bake a perfect cheesecake.</li>
        <li>Loves React, CSS, and learning new tech.</li>
        <li>Enjoys hiking and photography.</li>
      </ul>
      {/* Skills heatmap placeholder */}
      <div className="mb-8">
        <div className="font-semibold mb-2">Skills Heatmap</div>
        <div className="w-full h-16 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">[Skills Heatmap Here]</div>
      </div>
      {/* Mini timeline placeholder */}
      <div className="mb-8">
        <div className="font-semibold mb-2">Timeline</div>
        <div className="w-full h-16 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">[Mini Timeline Here]</div>
      </div>
      {/* Animated tech stack icons */}
      <div className="flex gap-6 mb-8 text-4xl animate-pulse">
        <FaReact className="text-blue-400" />
        <FaNodeJs className="text-green-500" />
        <FaPython className="text-yellow-400" />
        <FaCss3Alt className="text-blue-300" />
        <FaGithub className="text-gray-300" />
      </div>
      {/* Before/after coding images placeholder */}
      <div className="flex gap-8 items-center">
        <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">Before Coding</div>
        <span className="text-2xl">→</span>
        <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">After Coding</div>
      </div>
    </section>
  )
}

export default AboutSection