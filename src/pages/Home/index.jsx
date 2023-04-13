/**
 * Home Page 
 * 
 * @author: John Dave D. Lagdameo
 * @since: 04/13/2023 
 * 
 * @internal revisions: 
 * + 
 * + 
 * + 
 * 
 */

import Section from '../../components/Section'
import imgLight from '../../assets/image-light.png';
import imgDark from '../../assets/img-dark.png';

const Home = () => {
  return (
    <>
        <Section id="section-landing">
            <div className='row'>
                <div className='col-lg-6 mt-lg-5 mt-xl-5'>

                    <h1 className='section-landing-header'>
                        Lorem ipsum <br /> dolor sit amet <br /> consectetur
                    </h1>

                    <p className='text-secondary mt-4'>
                        Lorem ipsum dolor vrsit amet, consectetur adipiscing elit ut <br /> 
                        aliquam, purus sit amet luctus venenatis, lectus
                    </p>

                    <div className='p-0 mt-4'>
                        <button 
                            className='btn btn-dark'>
                            Call to Action
                        </button>
                        <button 
                            className='btn btn-outline-dark mx-2'>
                            See Workspace
                        </button>
                    </div>
                </div>
                <div className='col-lg-6 d-none d-lg-block d-xl-block mt-xl-5'>
                    <div id="img-landing-container">
                        <img 
                          src={imgLight} 
                          alt="img-1" 
                        />

                        <img 
                          src={imgDark} 
                          className="small-rt-img" 
                          alt="img-2"
                        />
                    </div>
                </div>
            </div>
      </Section>
    
      
      <Section id="section-landing-others">
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
            <h6>
              <b>Header Text</b>
            </h6>
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit ut <br />
              aliquam, purus sit amet luctus <br />
              venenatis, lectus magna fringilla urna, <br />
              porttito rhoncus dolor purus non <br />
              enim dolor. 
            </p>
          </div>

          <div className='col-lg-6 d-none d-lg-block d-xl-block d-flex text-center'>
            <img src={imgLight} alt="img1" />
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
            <div>
              <h6><b>Header Text</b></h6>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit ut <br />
                aliquam, purus sit amet luctus <br />
                venenatis, lectus magna fringilla urna, <br />
                porttito rhoncus dolor purus non <br />
                enim dolor. 
              </p>
            </div>
          </div>

        </div>
      </Section>
    </>
  )
}

export default Home;