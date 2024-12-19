import { Button } from '@/components/ui/button'
import React from 'react'

export default function Content() {
  return (
    <div className='row-span-10 -row-start-9'>
      <h1 className='font-Bold text-7xl text-center max-w-xl leading-[130%] mx-auto'>We make crypto clear and simple</h1>

      <p className='text-[#898CA9] font-Regular text-center mx-auto max-w-lg mt-3'>Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</p>
      <div className='flex items-center justify-center mt-5'>
        <Button size="lg" className="bg-gradient-to-l from-[#18C8FF] to-[#933FFE] dark:from-[#933FFE] dark:to-[#18C8FF] text-foreground" >Get Started</Button>
      </div>
    </div>
  )
}
