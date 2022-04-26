import React, { useRef } from "react";


function MovieSearch({ onSearch }) {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value)
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="youtube__search">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="우리 같이 검색해봐요!"
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
}
export default MovieSearch;