import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
