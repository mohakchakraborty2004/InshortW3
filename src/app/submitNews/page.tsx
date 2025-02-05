"use client"

import SubNews from "@/actions/submit"
import Verify from "@/actions/verify"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { useState } from "react"

export default function PostNews() {

    const [title, setTitle] = useState<string>("")
    const [description, setDescrip] = useState<string>("")
    const [score, setScore] = useState<number>()
    
    return <div>
        Post news

        <input type="text" placeholder="Title" onChange={(e: any)=> {
            setTitle(e.target.value)
        }} />
         <input type="text" placeholder="description" onChange={(e: any)=> {
            setDescrip(e.target.value)
        }} />
        <RainbowButton 
        onClick={()=> {
            setScore(Verify(title, description));
        }}
        >Verify news</RainbowButton>

        Score : {score}

        <RainbowButton onClick={()=> {
            if (!score) {
                alert("verify first")
            } else if(score >= 80){
                SubNews(title,description,score)
            }
        }}>submit news</RainbowButton>
    </div>
}