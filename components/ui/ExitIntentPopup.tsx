"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Check session storage to only show once per session
    if (sessionStorage.getItem('exitIntentTriggered')) {
      return
    }

    const mouseLeaveHandler = (e: MouseEvent) => {
      // Trigger if mouse leaves top of viewport and hasn't triggered yet
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true)
        setHasTriggered(true)
        sessionStorage.setItem('exitIntentTriggered', 'true')
      }
    }

    document.addEventListener("mouseleave", mouseLeaveHandler)
    return () => document.removeEventListener("mouseleave", mouseLeaveHandler)
  }, [hasTriggered])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-card border border-border w-full max-w-lg rounded-2xl p-8 relative shadow-2xl"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-syne font-bold text-3xl mb-2 text-foreground">
              Before you go...
            </h3>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Get a free 30-min strategy call. Let's discuss your product idea and see how Veltrix can bring it to life — no commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 bg-accent text-black font-bold py-3 px-6 rounded hover:bg-accent/90 transition-colors"
                onClick={() => {
                  setIsVisible(false)
                  window.open("https://wa.me/923273001777", "_blank")
                }}
              >
                Chat on WhatsApp
              </button>
              <button 
                className="flex-1 bg-transparent border border-border text-foreground font-medium py-3 px-6 rounded hover:bg-white/5 transition-colors"
                onClick={() => setIsVisible(false)}
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
