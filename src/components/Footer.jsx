import React, { useEffect, useState } from 'react'

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "There are only 10 types of people in the world: those who understand binary and those who don't.",
  "To understand what recursion is, you must first understand recursion.",
  "Why did the developer go broke? Because he used up all his cache."
]

const Footer = () => {
  const [time, setTime] = useState(new Date())
  const [joke, setJoke] = useState(jokes[0])

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)])
  }, [])

  return (
    <footer className="w-full py-6 px-8 bg-[#181818] text-white flex flex-col md:flex-row justify-between items-center mt-12">
      {/* Live clock */}
      <div className="mb-2 md:mb-0 font-mono text-lg">
        {time.toLocaleTimeString()}
      </div>
      {/* Random tech joke */}
      <div className="mb-2 md:mb-0 text-center max-w-xs text-orange-200 italic">{joke}</div>
      {/* Coding stats placeholder */}
      <div className="text-sm text-gray-400">[Wakatime/Coding Stats]</div>
    </footer>
  )
}

export default Footer