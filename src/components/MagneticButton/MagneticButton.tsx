import React, {useRef, MouseEvent, TouchEvent} from 'react'
import gsap from 'gsap'

export interface MagneticButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  children: React.ReactNode
  className?: string
  speed?: number
  tollerance?: number
  scale?: number
  debug?: boolean
  borderRadius?: number
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  speed = 1,
  tollerance = 0.8,
  scale = 1.2,
  debug = false,
  borderRadius = 0,
  ...props
}) => {
  const root = useRef<HTMLButtonElement>(null)
  const item = useRef<HTMLSpanElement>(null)
  const hover = useRef<HTMLSpanElement>(null)
  const rootBound = useRef<DOMRect | null>(null)
  const itemBound = useRef<DOMRect | null>(null)
  const diffBound = useRef<{x: number; y: number}>({x: 0, y: 0})

  const handleMouseEnter = () => {
    gsap.killTweensOf(item.current)
    gsap.set(hover.current, {
      scale: scale,
      borderRadius,
      background: debug ? 'rgba(0, 125, 255, .4)' : 'transparent',
    })

    rootBound.current = root.current?.getBoundingClientRect() || null
    itemBound.current = item.current?.getBoundingClientRect() || null
    if (rootBound.current) {
      diffBound.current.x =
        (rootBound.current.width * scale - rootBound.current.width) 
      diffBound.current.y =
        (rootBound.current.height * scale - rootBound.current.height) 
    }
  }

  const handleMouseLeave = () => {
    gsap.killTweensOf(item.current)
    gsap.to(item.current, {
      x: 0,
      y: 0,
      ease: 'elastic.out(1.1, .4)',
      duration: 1.2,
    })
    gsap.set(hover.current, {
      scale: 1,
    })
  }

  const handleMouseMove = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ) => {
    const x =
      'clientX' in e ? e.clientX : 'touches' in e ? e.touches[0].clientX : 0
    const y =
      'clientY' in e ? e.clientY : 'touches' in e ? e.touches[0].clientY : 0

    if (rootBound.current && itemBound.current) {
      const maxX =
        ((rootBound.current.width - itemBound.current.width) / 2) * tollerance
      const maxY =
        ((rootBound.current.height - itemBound.current.height) / 2) * tollerance

      const newX = gsap.utils.mapRange(
        0,
        rootBound.current.width * scale,
        -maxX,
        maxX,
        x - (rootBound.current.x + diffBound.current.x)
      )

      const newY = gsap.utils.mapRange(
        0,
        rootBound.current.height * scale,
        -maxY,
        maxY,
        y - (rootBound.current.y + diffBound.current.y)
      )

      gsap.killTweensOf(item.current)
      gsap.to(item.current, {
        x: newX,
        y: newY,
        ease: 'power3.out',
        duration: speed,
      })
    }
  }

  return (
    <button
      ref={root}
      className={` ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      {...props}
    >
      <span ref={item}>{children}</span>
      <span ref={hover} />
    </button>
  )
}

export default MagneticButton
