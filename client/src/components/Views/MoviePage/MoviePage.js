import React from 'react'
import auth from '../../../hoc/auth'

function MoviePage() {
  return (
    <div>MoviePage</div>
  )
}

export default auth(MoviePage,null)