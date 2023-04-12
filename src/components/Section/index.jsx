/**
 * 
 * Components - Section 
 * 
 * @author: John Dave Lagdameo
 * @since: 04/13/2023 
 * 
 * @internal revisions:
 * + 
 * + 
 * +
 */

import PropTypes from 'prop-types';

const Section = ({ id, bg, children }) => {
  return (
    <div 
      id={id} 
      className={`container section ${bg}`}>
     {children}
    </div>
  )
}

Section.defaultProps = {
  bg: "bg-theme-light"
};

Section.propTypes = {
  id: PropTypes.string,
  bg: PropTypes.string, 
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
}

export default Section