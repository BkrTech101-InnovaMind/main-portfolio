import { useEffect, useMemo, useState } from "react"

export default function TypeWriter({
  texts = [],
  startingTimer,
  endingTimer,
  isSingleText = true,
  textColor,
  backGroundColor,
  textWidth = "text-[15vh]",
}) {
  const [text, setText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const phrases = useMemo(() => texts, [texts])
  const [isHovering, setIsHovering] = useState(false)

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  useEffect(() => {
    let timerId

    const typewriter = async () => {
      const currentPhrase = phrases[currentPhraseIndex]

      if (!currentPhrase) {
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
        return
      }

      for (let i = 0; i <= currentPhrase.length; i++) {
        timerId = setTimeout(() => {
          setText(currentPhrase.substring(0, i))
        }, 100 * i)
      }

      await sleep(endingTimer)

      if (!isSingleText) {
        for (let i = currentPhrase.length; i >= 0; i--) {
          timerId = setTimeout(() => {
            setText(currentPhrase.substring(0, i))
          }, 100 * (2 * currentPhrase.length - i))
        }

        await sleep(startingTimer)

        timerId = setTimeout(() => {
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
        }, 100 * (3 * currentPhrase.length))
      }
    }

    typewriter()
    return () => clearTimeout(timerId)
  }, [currentPhraseIndex, phrases, startingTimer, endingTimer, isSingleText])

  return (
    <div
      className={`${
        isSingleText ? "border-[0.1px] border-gray-700" : ""
      } text-center cursor-text ${textWidth}`}
      style={{
        backgroundColor: isSingleText && isHovering ? backGroundColor : "",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1 style={{ color: isSingleText ? textColor : "" }}>
        <span className='text-slate-200'>{'{" '}</span>
        {`_${text}`} <span className='animate-cursor font-extrabold'>|</span>
        <span className='text-slate-200'>{' "}'}</span>
      </h1>
    </div>
  )
}
