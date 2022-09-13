import React from 'react'

function GridCard() {
  return (
    <div style={{
      /*border: '0.1rem solid black',*/
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      padding: '3px',
      margin: '3px'
    }}>
      <div style={{
        border: '0.1rem solid black',
        width: '80%',
        height: '80%'
      }}>
        책이미지
      </div>
      <div>
        책제목
      </div>
      <div>
        읽은 날짜
      </div>
    </div>
  )
}

export default GridCard