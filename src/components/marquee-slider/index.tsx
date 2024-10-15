'use client'
import { useEffect, useState, useRef } from 'react'

const MarqueesSlider = ({
  speed = 40,
  children,
}: {
  speed?: number
  children?: React.ReactNode
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [marqueeContainerWidth, setMarqueeContainerWidth] = useState(0)
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const marqueeContainerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMounted) return

    const calculateWidth = () => {
      // Get the width of container and width of marquee
      if (marqueeRef.current && marqueeContainerRef.current) {
        setMarqueeContainerWidth(
          marqueeContainerRef.current.getBoundingClientRect().width
        )
        setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width)
      }
    }

    calculateWidth()
    // Rerender on resize
    window.addEventListener('resize', calculateWidth)
    return () => {
      window.removeEventListener('resize', calculateWidth)
    }
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])
  // Calculate animation duration based on speed prop and marqueeContainerWidth
  const duration =
    marqueeWidth < marqueeContainerWidth
      ? marqueeContainerWidth / speed
      : marqueeWidth / speed

  return (
    <>
      {!isMounted ? null : (
        <div ref={marqueeContainerRef} className="marqueeContainer">
          <div
            ref={marqueeRef}
            className="marquee"
            style={{ ['--duration' as string]: `${duration}s` }}
          >
            {children}
          </div>
          <div
            className="marquee"
            style={{ ['--duration' as string]: `${duration}s` }}
            aria-hidden="true"
          >
            {children}
          </div>
        </div>
      )}

      <style jsx>
        {`
          .marqueeContainer {
            overflow-x: hidden !important;
            display: flex !important;
            flex-direction: row !important;
            position: relative;
            width: 100%;
          }

          .marquee {
            flex: 0 0 auto;
            min-width: 100%;
            z-index: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            animation: scroll var(--duration) linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  )
}

export default MarqueesSlider
