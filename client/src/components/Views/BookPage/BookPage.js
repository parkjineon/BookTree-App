import React from 'react'
import auth from '../../../hoc/auth';

function BookPage() {
  return (
    <div>BookPage</div>
  )
}

export default auth(BookPage,null)