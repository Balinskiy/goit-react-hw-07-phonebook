import React from 'react';
import { Filter } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filterSlice';
import { getFilter } from 'store/selectors';

const FilterComponent = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <Filter
      onChange={onChange}
      value={value}
      type="text"
      name="filter"
      placeholder="Find contact name"
    />
  );
};

export default FilterComponent;
