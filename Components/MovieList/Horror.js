import React, { useState,useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { setFavouriteData,setApiData} from "../rootSlice";


const Horror = () => {
  const [moviedata, setMoviedata] = useState([]);
 let dispatch=useDispatch()
 const [pageNo, setPageNo] = useState(1);
   const[id,setId]=useState(null)
   
   useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const horror = await fetch(  `https://api.themoviedb.org/3/search/tv?api_key=cfe422613b250f702980a3bbf9e90716&query=horror&page=${pageNo}`
 
               );
                const data1 = await horror.json();
        
  
       
                const combinedData = (
                  data1.results || []
          );
                  
                
        console.log("data", combinedData);
       setMoviedata(combinedData);
       dispatch(setApiData({horror:combinedData}));
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchDataFromAPI();
  }, [pageNo]);
  
   //add to favourites
   const favouriteData = useSelector((state) => state.searchbar.favouriteData );

   const FindId = (movieId) => { 
     setId(movieId); // Set the selected movie ID
     const findMovieToAdd =  moviedata.find((movie) => movie.id === movieId);
     
     dispatch(setFavouriteData([...favouriteData, findMovieToAdd]));
     
   };
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
            <div style={{margin:'20px'}} >
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
                  <h5 className="card-title">
                  Title: {data.original_name}
                    
                    
                   
                  </h5>
                  <h5>{data.first_air_date}</h5>
                  <div>
                 
                  <button
            
            className="btn btn-danger"
            onClick={() => FindId(data.id)}
          >
           Add To Favourites
          </button>
                  </div>

                  <span>
                  
                  </span>
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
  )
}

export default Horror