import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
    return (
        <label>
            Find contacts by name
            <input
                type="text"
                placeholder="Enter contact"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};