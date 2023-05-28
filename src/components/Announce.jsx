import { Close } from '@material-ui/icons'
import React, { useState } from 'react'

const Announce = () => {
    const [announceStyle,setAnnounceStyle] = useState('flex items-center justify-center bg-[#007AFF] font-bold text-white');

    const handleClose = () => {
        setAnnounceStyle(announceStyle + " hidden")
    }

  return (
    <div className={announceStyle}>
        <h2>Hurry up it's 40% off now</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce