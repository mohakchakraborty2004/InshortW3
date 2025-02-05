'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { RainbowButton } from "@/components/ui/rainbow-button";
 
export default function SplineSceneBasic() {
  return (
    <Card className="w-full h-[100vh] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex p-8 relative z-10 flex-col justify-center items-center ml-5">
          <h1 className="text-4xl md:text-[4rem] p-8 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            BlockBrief
          </h1>
          <p className="mt-4 text-neutral-500 max-w-lg items-center text-center">
          Stay informed with bite-sized, blockchain-powered news on the go. Unfiltered, unstoppable, and always up to date.
          </p>

          <RainbowButton className="mt-4">Start Reading</RainbowButton>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
