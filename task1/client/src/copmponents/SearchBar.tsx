import { useCallback, useEffect, useRef, useState } from "react";
import searchSvg from "../assets/images/search.svg";
import useDebounce from "../hooks/useDebounce";
import { useAppContext } from "../hooks/useAppContext";
import { FetchedUser } from "../types/FetchedUser";
import { User } from "../types/User";

const SearchBar = () => {
  const [searchString, setSearchString] = useState<string>("");
  const searchValue = useDebounce(searchString, 750);
  const { setUsers } = useAppContext();
  const isMounted = useRef(false);

  const handleSearch = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000?term=${searchValue}`);
      if (!response.ok) throw new Error("Requert was unsuccessful");
      const result = await response.json();
      const formatted = result.map((item: FetchedUser) => {
        const user: User = {
          name: item.name,
          phone: item.phone,
          email: item.email,
          address: item.address,
          hireDate: item.hire_date,
          department: item.department,
          positionName: item.position_name,
        };
        return user;
      });
      setUsers(formatted);
    } catch (error) {
      let errorText = "Failed to fetch search results.";
      if (error instanceof Error) errorText += ` Error: ${error.message}`;
      console.error(errorText);
    }
  }, [searchValue, setUsers]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    handleSearch();
  }, [handleSearch, searchValue, isMounted]);

  return (
    <form className="search_form" onSubmit={(e) => e.preventDefault()}>
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        className="search_field"
        type="text"
      />
      <div onClick={handleSearch} className="icon_wrapper search_icon">
        <img src={searchSvg} alt="иконка поиска" />
      </div>
    </form>
  );
};

export default SearchBar;
