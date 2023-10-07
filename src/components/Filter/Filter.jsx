import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };
  return (
    <div>
      <input
        id="outlined-basic"
        label="search"
        variant="outlined"
        onChange={handleFilterChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};
