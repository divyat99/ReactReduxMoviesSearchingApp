import React from "react";
import { useSelector } from "react-redux";
const SearchList = () => {
  const filterData = useSelector((state) => state.searchbar.filterData);
  console.log('searchfilter',filterData)
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "5px",
          backgroundColor: "silver",
        }}
      >
        {filterData?.map((data) => (
          <div>
            <div
              className="card"
              style={{
                width: "105rem",
                margin: "8px",

                height: "350px",
              }}
            >
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}

                alt="Card image cap"
                style={{ height: "250px", width: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Title:{data.title} {data.original_name}</h5>
                <p>{data.release_date}{data.first_air_date}</p>
                <div></div>

                <span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchList;
