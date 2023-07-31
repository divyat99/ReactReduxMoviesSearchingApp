import React, { useState } from 'react';

import { useSelector,useDispatch } from "react-redux";
import { setFavouriteData } from "./rootSlice";
const FavouriteList = () => {
  const [filterData, setfilterData] = useState([])
  let dispatch=useDispatch()
  const favouriteMovieData = useSelector((state) => state.searchbar.favouriteData );
 
//   //delete
const remove=(id)=>{
  let filterMovie=favouriteMovieData.filter((movie)=>movie.id!==id);
  // setfilterData(filterMovie)
  console.log(filterMovie)
  dispatch(setFavouriteData(filterMovie))


};
  return (
    <>
      <div
        style={{
    display: "flex",
    flexWrap: "wrap",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "rgb(220 165 154)",
  }}
      >
        {favouriteMovieData?.map((data) => (
          <div>
            <div
              className="card"
              style={{
          width: "20rem",
          margin: "8px",
          flexBasis: "25%",
          height: "500px",
        }}
            >
            <div><button  className="btn btn-danger" 
              onClick={()=>remove(data.id)}
             >x</button></div>

              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}

                alt="Card image cap"
                style={{ height: "350px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Title:{data.title} {data.original_name}</h5>
                <p>{data.release_date}{data.first_air_date}</p>
                
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FavouriteList;
