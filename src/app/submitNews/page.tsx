"use client"
// impore ui 
import SubNews from "@/actions/submit"
import Verify from "@/actions/verify"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { useState } from "react"

export default async function PostNews() {

    const [title, setTitle] = useState<string>("")
    const [description, setDescrip] = useState<string>("")
    const [score, setScore] = useState<number>()
    const [source, setSource] = useState<string>("")
    const [id, setId] = useState<string>("")
    
    return <div>
        Post news

        <input type="text" placeholder="Title" onChange={(e: any)=> {
            setTitle(e.target.value)
        }} />
         <input type="text" placeholder="description" onChange={(e: any)=> {
            setDescrip(e.target.value)
        }} />
        <input type="text" placeholder="enter a valid url source" onChange={(e: any)=> {
            setSource(e.target.value)
        }} />
        <RainbowButton 
        onClick={async ()=> {
            // returns score here
            setScore( await Verify(title, description, source));
        }}
        >Verify news</RainbowButton>

        Score : {score}

        <RainbowButton onClick={async ()=> {
            if (!score) {
                alert("verify first")
            } else if(score >= 70){
                // not required just added for confirmation for user
               setId( await SubNews(title,description,score))
            }
        }}>submit news</RainbowButton>

        submssion Id : {id}
    </div>
}