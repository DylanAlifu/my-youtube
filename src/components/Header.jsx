import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const response = await data.json();
    setSuggestions(response[1]);

    dispatch(
      cacheResults({
        [searchQuery]: response[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="header grid grid-flow-col p-5 my-2 shadow-lg">
      <div className="header__left flex col-span-1 gap-4">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="menu-icon"
          className="h-8 cursor-pointer"
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="logo"
            className="h-8"
          />
        </a>
      </div>
      <div className="header__middle col-span-10">
        <div>
          <input
            type="text"
            id="search-input"
            className="w-1/2 border border-r-0 border-gray-400 p-2 px-5 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            autoComplete="off"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-l-0 border-gray-400 p-2 rounded-r-full bg-black text-white">
            Search
          </button>
        </div>
        {searchQuery.length > 0 && showSuggestions && (
          <div className="fixed bg-white text-black px-5 py-2 w-[43rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li className="py-1 hover:bg-gray-100" key={suggestion}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="header__right flex items-center gap-4 col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="profile-icon"
          className="h-10"
        />
        <p>Dylan</p>
      </div>
    </div>
  );
};

export default Header;
