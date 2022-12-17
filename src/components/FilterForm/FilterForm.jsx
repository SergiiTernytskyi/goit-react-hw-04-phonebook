import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormWrapper, Input, Label } from './FilterForm.styled';

export const FilterForm = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <FormWrapper>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <Input
        id={filterId}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onChange}
        value={value}
      />
    </FormWrapper>
  );
};

FilterForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
