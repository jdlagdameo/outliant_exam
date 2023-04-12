import React from 'react'
import PropTypes from 'prop-types'

const Section = ({children}) => {
  return (
    <div className='section pt-5'>
     {children}
    </div>
  )
}

Section.propTypes = {}

export default Section