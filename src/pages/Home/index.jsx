import React from 'react'
import PropTypes from 'prop-types'
import Section from '../../components/Section'

const Home = props => {
  return (
  <div>
    <Section>
      <div className='row'>
        <div className='col-lg-6'>
          <h1>
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
          </p>

          <div>
            <button 
              className='btn btn-dark mx-2 tex'>
                Call to Action
              </button>
            <button className='btn btn-outline-dark ml-2'>
              See Workspace
            </button>
          </div>
        </div>
        <div className='col-lg-6'>

        </div>
      </div>
    </Section>
    <Section>
      <div className='row'>
        <div className='col-lg-3'>
          <h6>Header Text</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
        <div className='col-lg-6'>
          dawd
        </div>
        <div className='col-lg-3'>
          <h6>Header Text</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
    </Section>
  </div>
  )
}

Home.propTypes = {}

export default Home