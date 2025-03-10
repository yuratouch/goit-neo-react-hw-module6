import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "/src/redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <label>
        Find contacts by name
        <input
          className={`inputField ${style.searchField}`}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </>
  );
}

export default SearchBox;
