import React from 'react'
import auth from '../../../hoc/auth'

function LandingPage() {


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '93vh'
    }}>
      
    </div>
  )
}

export default auth(LandingPage, null)
