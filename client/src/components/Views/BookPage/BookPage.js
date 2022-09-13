import React from 'react';
import auth from '../../../hoc/auth';
import PageMain from './PageMain';
import MainBook from './MainBook';
import MainMovie from './MainMovie';

function BookPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '200px'
    }}>
      <PageMain />
      <div style={{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <MainBook />
        <MainMovie />
      </div>
    </div>
  )
}
export default auth(BookPage,null)