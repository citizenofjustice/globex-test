import searchSvg from "../assets/images/search.svg";

const SearchBar = () => {
  return (
    <form className="search_form">
      <input className="search_field" type="text" />
      <div className="icon_wrapper search_icon">
        <img src={searchSvg} alt="иконка поиска" />
      </div>
    </form>
  );
};

export default SearchBar;
