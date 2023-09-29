import React from 'react'
import { Waveform } from '@uiball/loaders'
function Loading() {
  return (
    <div className='flex justify-center items-center overlay'>
        <Waveform 
 size={40}
 lineWeight={3.5}
 speed={1} 
 color="black" 
/>
    </div>
  )
}

export default Loading