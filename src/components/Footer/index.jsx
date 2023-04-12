import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section'

const Footer = props => {
  return (
    <Section>
      <div className='row'>
        <div className='col-lg-6'>
          
        </div>
        <div className='col-lg-6'>
          <h1>
            Lorem ipsum dolor <br /> sit consectetur
          </h1>
          <button className='btn btn-dark'>Call to Action</button>
        </div>
      </div>
    </Section>
  )
}

Footer.propTypes = {}

export default Footer