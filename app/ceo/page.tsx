"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TechBadge } from "@/components/ui/TechBadge"
import { Github, Linkedin, Twitter } from "lucide-react"

const TIMELINE = [
  { year: "2018", title: "The Beginning", desc: "Started coding full-stack applications. Deep dived into the MERN stack and native mobile development." },
  { year: "2020", title: "Freelance Architect", desc: "Worked with multiple YC startups to engineer scalable MVPs. Realized the gap in consistent quality execution." },
  { year: "2022", title: "AI Integration", desc: "Shifted focus heavily into applied AI, building orchestration layers for enterprise tools before it was mainstream." },
  { year: "2024", title: "Founding Veltrix", desc: "Assembled a dedicated team of elite engineers in Lahore to deliver Silicon Valley quality to the globe." }
]

const PHILOSOPHY = [
  "Code should be a utility, not a liability. If it's hard to read, it's hard to scale.",
  "AI won't replace engineers, but engineers who use AI will replace those who don't.",
  "Transparency builds trust. Honest timelines build lasting partnerships."
]

export default function CEOPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Hero & Intro */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-secondary border border-border">
              <Image src="/team/kashan-iqbal.jpg" alt="Kashan Iqbal" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" unoptimized />
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Founder & CEO</span>
            <h1 className="font-syne font-bold text-5xl md:text-7xl mb-8 text-white">
              Kashan Iqbal
            </h1>
            
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mb-10">
              <p>Hi, I’m Kashan. Over the past six years, I've engineered software for everything from stealth startups to established enterprises. I founded Veltrix because I saw too many brilliant ideas die at the hands of poor technical execution.</p>
              <p>My background is rooted in full-stack architecture, applied AI, and mobile development. I believe that building great software requires an intense obsession with both the microscopic details of code structure and the macroscopic view of business logic.</p>
              <p>At Veltrix, I don't just run the business—I review the architecture. When you work with us, you're getting a team operating under the strictest engineering standards.</p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mb-10 border-y border-border py-6">
              <div><span className="font-syne font-bold text-3xl text-white block">50+</span><span className="text-sm text-text-muted uppercase tracking-wider">Projects Built</span></div>
              <div><span className="font-syne font-bold text-3xl text-white block">6+</span><span className="text-sm text-text-muted uppercase tracking-wider">Years Exp</span></div>
              <div><span className="font-syne font-bold text-3xl text-white block">4</span><span className="text-sm text-text-muted uppercase tracking-wider">Countries</span></div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.open("https://wa.me/923273001777", "_blank")}
                className="bg-accent text-black font-bold px-8 py-3 rounded hover:bg-accent/90 transition-colors"
              >
                Chat with Kashan on WhatsApp
              </button>
              <div className="flex items-center gap-2">
                <a href="https://linkedin.com/in/kashaniqbal" className="p-3 bg-secondary rounded text-text-muted hover:text-accent hover:bg-card transition-colors"><Linkedin className="w-5 h-5"/></a>
                <a href="https://github.com/kashaniqbal" className="p-3 bg-secondary rounded text-text-muted hover:text-accent hover:bg-card transition-colors"><Github className="w-5 h-5"/></a>
                <a href="https://twitter.com/kashaniqbal" className="p-3 bg-secondary rounded text-text-muted hover:text-accent hover:bg-card transition-colors"><Twitter className="w-5 h-5"/></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <h2 className="font-syne font-bold text-3xl mb-12 text-center">Core Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PHILOSOPHY.map((quote, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-secondary p-8 rounded-2xl border border-border">
              <span className="text-accent text-4xl font-syne inline-block mb-4">"</span>
              <p className="text-lg text-white font-medium leading-relaxed">{quote}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline & Tech */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-syne font-bold text-3xl mb-12">The Journey</h2>
            <div className="relative border-l border-border ml-2 space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-accent text-sm font-bold tracking-widest block mb-1">{item.year}</span>
                  <h3 className="font-syne font-bold text-xl mb-2 text-white">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-syne font-bold text-3xl mb-12">Personal Stack</h2>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="mb-8">
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2"><TechBadge name="TypeScript" /> <TechBadge name="Python" /> <TechBadge name="Go" /> <TechBadge name="Dart" /></div>
              </div>
              <div className="mb-8">
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Frameworks</h4>
                <div className="flex flex-wrap gap-2"><TechBadge name="Next.js" /> <TechBadge name="Node.js" /> <TechBadge name="Flutter" /> <TechBadge name="React Native" /></div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Infrastructure & AI</h4>
                <div className="flex flex-wrap gap-2"><TechBadge name="AWS" /> <TechBadge name="Firebase" /> <TechBadge name="LangChain" /> <TechBadge name="PostgreSQL" /> <TechBadge name="Solidity" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
