import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setFavouriteData,setApiData} from "../rootSlice";
const Popular = () => {
  const [moviedata, setMoviedata] = useState([]);
  let dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(2);
  const [id, setId] = useState(null);
  const favouriteData = useSelector((state) => state.searchbar.favouriteData);

  //add to favourites

  const FindId = (movieId) => {
    setId(movieId); // Set the selected movie ID
    const findMovieToAdd = moviedata.find((movie) => movie.id === movieId);

    dispatch(setFavouriteData([...favouriteData, findMovieToAdd]));
  };
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const popular = await fetch(
          `https:api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=${pageNo}&sort_by=popularity.desc&with_genres=12&year=1986`
        );
        const data1 = await popular.json();

        const combinedData = (
          data1.results || []
  );
          
        
  
       setMoviedata(combinedData);
       dispatch(setApiData({popular:combinedData}));
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromAPI();
  }, [pageNo]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          border: "2px solid black",
          borderRadius: "10px",
          backgroundColor: "#160455",
        }}
      >
        {moviedata.map((data) => (
          <div style={{ margin: "20px" }}>
            <div
              className="card"
              style={{
                width: "20rem",
                margin: "8px",
                flexBasis: "25%",
                height: "500px",
              }}
            >
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt="Card image cap"
                style={{ height: "320px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Title: {data.title}</h5>
                <p>{data.release_date}</p>
                <div>
                  <button
                    onClick={() => FindId(data.id)}
                    className="btn btn-danger"
                  >
                    Add To Favourites
                  </button>
                </div>

                <span></span>
              </div>
            </div>
          </div>
        ))}
        <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    {/* <li className="page-item disabled">
      <a className="page-link" href="#"onClick={()=>setPageNo(pageNo-1)} >
                Previous
      
      </a>
   
    </li> */}
    <li className={`page-item ${pageNo === 1 ? 'disabled' : ''}`}>
  <a className="page-link" href="#" onClick={() => setPageNo(pageNo - 1)}>
    Previous
  </a>
</li>

    <li className="page-item">
      <a className="page-link" href="#" >
        {pageNo}
      </a>
    </li>
   
   
    <li className="page-item">
      <a className="page-link" href="#"onClick={()=>setPageNo(pageNo+1)}>
    Next
      </a>
    </li>
  </ul>
</nav>
      </div>
    </>
  );
};

export default Popular;
