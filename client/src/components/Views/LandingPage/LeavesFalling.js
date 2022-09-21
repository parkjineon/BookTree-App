import React, { useEffect } from 'react'

function LeavesFalling() {

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function fallingLeaves1(){
      const page = document.querySelector('.page')
      const leaf = document.createElement('span')
      const leafNames = ['falling1', 'falling2']
      const leafTiming = {
        duration: 15000,
        fill: "forwards"
      }

      leaf.classList.add(leafNames[rand(0,1)])
      const num = rand(1,3)

      if(num === 1){
        leaf.animate([
          { right: Math.random() * 33+ '%', top: '0%' },
          { right: Math.random() * 33+ '%', top: '45%' },
          { right: Math.random() * 33 + '%', top: '90%' },
          { opacity: '0%' }
        ],leafTiming);
      }else if(num === 2){
        leaf.animate([
          { right: Math.random() * 33 + 66 + '%', top: '0%' },
          { right: Math.random() * 33 + 66 + '%', top: '45%' },
          { right: Math.random() * 33 + 66 + '%', top: '90%' },
          { opacity: '0%' }
        ],leafTiming);
      }else {
        leaf.animate([
          { right: Math.random() * 33 + 33 + '%', top: '0%' },
          { right: Math.random() * 33 + 33 + '%', top: '45%' },
          { right: Math.random() * 33 + 33 + '%', top: '90%' },
          { opacity: '0%' }
        ],leafTiming);
      }

      page.appendChild(leaf)

      setTimeout(() => {
        leaf.remove();
      }, 15000);
    };

    useEffect(()=>{
      const fallingLeaves = setInterval(fallingLeaves1,500);
      return () => {
        clearInterval(fallingLeaves);
      }
    })

  return (
    <div className='page'>

    </div>
  )
}

export default LeavesFalling