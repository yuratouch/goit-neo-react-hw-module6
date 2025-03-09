import style from "./SearchBox.module.css";

function SearchBox({ value, onFileterChange }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          className={`inputField ${style.searchField}`}
          type="text"
          value={value}
          onChange={(event) => {
            onFileterChange(event.target.value);
          }}
        />
      </label>
    </>
  );
}

export default SearchBox;
