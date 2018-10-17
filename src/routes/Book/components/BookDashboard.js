import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import Search from './Search'
import LogIn from './LogIn'
import QuanLyTai from './QuanLyTai'

const BookDashboard = (props) => (
  
  <div style={{ margin: '0 auto' }} >
    <div className="mb-2"><Search /></div>
    <BookList {...props} />
    <div className="my-2 py-2 border border-primary">
      {!props.device 
        ? <LogIn {...props} /> 
        : <QuanLyTai {...props} />
      }
    </div>
  </div>
)
BookDashboard.propTypes = {
}

export default BookDashboard

