/**
 * 
 * Components - Footer 
 * 
 * @author: John Dave Lagdameo
 * @since: 04/13/2023 
 * 
 * @internal revisions:
 * + 
 * + 
 * +
 */

import Section from '../Section';
import imgLight from '../../assets/image-light.png';

const Footer = () => {
  return (
    <footer className="bg-theme-dark">
      <Section bg="bg-theme-dark">
        <div className='row pb-5'>

          <div className='col-lg-6 d-none d-lg-block d-xl-block'>
            <div id="img-footer-container">
              <img 
                src={imgLight} 
                alt="img-footer" />
            </div>
          </div>

          <div className='col-lg-6'>
            <h1 className='section-footer-header pt-5'>
              Lorem ipsum dolor <br /> sit consectetur
            </h1>

            <p className='text-secondary mt-4'>
              Lorem ipsum dolor vrsit amet, consectetur adipiscing elit ut <br />
              aliquam, purus sit amet luctus venenatis, lectus
            </p>

            <button 
              className='btn btn-dark mt-4'>
                Call to Action
            </button>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer;