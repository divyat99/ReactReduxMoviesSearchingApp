import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilterData } from "./rootSlice";
const Search = () => {
  const data = useSelector((state) => state.searchbar.apiData);
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
    navigate("/searchlist");
  };

  let filteredMovies = [];
  let filteredSeries = [];
  let filteredHorror = [];
  let filteredAction = [];
  let filteredAdventure = [];
  let filteredKids = [];
  let filteredComedy = [];
  let filteredCrime = [];
  let filteredThriller = [];
  let filteredMusic = [];
  let filteredPopular = [];
  let filteredFamily = [];
  let filteredScience = [];
  let filteredDocumentry = [];
  let filteredMystry = [];
  let filterData = [];

  if (inputText.length > 0) {
    filteredMovies = data?.movies?.filter(
      (movie) =>
        movie.title.match(inputText) || movie.release_date.match(inputText)
    )??[];
    filteredSeries = data?.series?.filter(
      (series) =>
        series.name.match(inputText) || series.first_air_date.match(inputText)
    )??[];
    filteredHorror = data?.horror?.filter(
      (horror) =>
        horror.name.match(inputText) || horror.first_air_date.match(inputText)
    )??[];
    filteredAction = data?.action?.filter(
      (action) =>
        action.title.match(inputText) || action.release_date.match(inputText)
    )??[];
    filteredAdventure = data?.adventure?.filter(
      (adventure) =>
        adventure.title.match(inputText) ||
        adventure.release_date.match(inputText)
    )??[];
    filteredKids = data?.kids?.filter(
      (kids) =>
        kids.title.match(inputText) || kids.release_date.match(inputText)
    )??[];
    filteredComedy = data?.comedy?.filter(
      (comedy) =>
        comedy.title.match(inputText) || comedy.release_date.match(inputText)
    )??[];
    filteredCrime = data?.crime?.filter(
      (crime) =>
        crime.title.match(inputText) || crime.release_date.match(inputText)
    )??[];
    filteredThriller = data?.thriller?.filter(
      (thriller) =>
        thriller.title.match(inputText) ||
        thriller.release_date.match(inputText)
    )??[];
    filteredMusic = data?.music?.filter(
      (music) =>
        music.title.match(inputText) || music.release_date.match(inputText)
    )??[];
    filteredPopular = data?.popular?.filter(
      (popular) =>
        popular.title.match(inputText) || popular.release_date.match(inputText)
    )??[];
    filteredFamily = data?.family?.filter(
      (family) =>
        family.title.match(inputText) || family.release_date.match(inputText)
    )??[];
    filteredScience = data?.science?.filter(
      (science) =>
        science.title.match(inputText) || science.release_date.match(inputText)
    )??[];
    filteredDocumentry = data?.documentry?.filter(
      (documentry) =>
        documentry.title.match(inputText) ||
        documentry.release_date.match(inputText)
    )??[];
    filteredMystry = data?.mystry?.filter(
      (mystry) =>
        mystry.title.match(inputText) || mystry.release_date.match(inputText)
    )??[];
  }

  filterData = [
    ...filteredMovies,
    ...filteredSeries,
    ...filteredHorror,
    ...filteredDocumentry,
    ...filteredAction,
    ...filteredAdventure,
    ...filteredComedy,
    ...filteredCrime,
    ...filteredFamily,
    ...filteredKids,
    ...filteredMusic,
    ...filteredMystry,
    ...filteredThriller,
    ...filteredPopular,
    ...filteredScience,
  ];
  dispatch(setFilterData(filterData));
  console.log("filteredata", filterData);
 
  return (
    <>
      <form className="form-inline my-2 my-lg-12" style={{backgroundColor:"blueviolet"}}>
        <input
          className="form-control mr-sm-2 "
          style={{ width: "500px", fontSize: "16px", margin: "5px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Search;
