import React from 'react'

const ResumeSection = () => (
  <section id="resume" className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black text-white">
    <h2 className="text-4xl font-bold mb-8">Resume</h2>
    {/* Download button */}
    <button className="mb-6 px-6 py-3 bg-orange-400 text-white font-bold rounded-full hover:scale-105 transition">Download Resume</button>
    {/* Inline PDF viewer placeholder */}
    <div className="mb-6">[Inline PDF Viewer]</div>
    {/* QR code placeholder */}
    <div className="mb-6">[QR Code for Mobile Download]</div>
    {/* Resume stats placeholder */}
    <div>[Resume Stats]</div>
  </section>
)

export default ResumeSection