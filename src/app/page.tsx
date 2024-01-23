"use client"
import { useState, useEffect } from "react"
import Sentiment from "sentiment"
import emojiEmotion from "@/utils/emoji"

export default function Home() {
  const [sentiment, setSentiment] = useState(null)
  const [text, setText] = useState<string>('')
  const [emotionScore, setEmotionScore] = useState<number>(0)

  useEffect(() => {
    const sentimentInitial = new Sentiment()
    setSentiment(sentimentInitial)
  }, [])

  useEffect(() => {
    const emotionResult = sentiment?.analyze(text)
    const emotionScore = emotionResult?.score | 0
    setEmotionScore(emotionScore)
  }, [text])

  return (
    <main className="flex h-screen w-screen bg-gray-900">
      <div className="flex flex-col w-4/5 h-4/5  m-auto">
        <div className="mx-auto mt-40 text-white text-8xl"> {emojiEmotion(emotionScore)} </div>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter some text"
        className="rounded-md w-3/5 mx-auto my-10 bg-gray-600 px-3 py-2 text-white outline-none focus:ring-1 focus:ring-blue-300"></input>
      </div>
    </main>
  )
}