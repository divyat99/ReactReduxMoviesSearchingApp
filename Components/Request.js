// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setApiData } from "./rootSlice";

// const Request = () => {
//   const [fetchData, setFetchData] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchDataFromAPI = async () => {
//       try {
//         const drama = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=6&sort_by=popularity.desc&with_genres=18&year=1997"
//                );
//                 const data1 = await drama.json();
//         console.log("data1", data1);

//         const horror = await fetch(
//           " https://api.themoviedb.org/3/search/tv?api_key=cfe422613b250f702980a3bbf9e90716&query=horror&page=1"
 //   );
//         const data2 = await horror.json();
//         const action=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=1&sort_by=popularity.desc&with_genres=28&year=2022")
//         const data3=await action.json();

//         const adventure=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=2&sort_by=popularity.desc&with_genres=12&year=1986")
//         const data4=await adventure.json();

// const kids=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=5&sort_by=popularity.desc&with_genres=10751&year=2020")
// const data5=await kids.json();

// const tvSeries=await fetch("https://api.themoviedb.org/3/discover/tv?api_key=cfe422613b250f702980a3bbf9e90716&air_date.gte=2022&page=1&sort_by=popularity.desc&with_genres=10766")
// const data6=await tvSeries.json();    

// const comedy=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=4&sort_by=popularity.desc&with_genres=35&year=2022")
// const data7=await comedy.json();

// const crime=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=3&sort_by=popularity.desc&with_genres=80&year=2022")
// const data8=await crime.json();

// const thriller=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=4&sort_by=popularity.desc&with_genres=53&year=2022")
// const data9=await thriller.json();

// const music=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=2&sort_by=popularity.desc&with_genres=10402&year=2022")
// const data10=await music.json();

// const popular=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=1&sort_by=popularity.desc");
// const data11=await popular.json();
// const family=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=2&sort_by=popularity.desc&with_genres=10751&year=1988")
// const data12=await family.json();

// const science=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=2&sort_by=popularity.desc&with_genres=878&year=2022")
// const data13=await science.json();

// const documentry=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=1&sort_by=vote_count.desc&with_genres=99&year=2004")
// const data14=await documentry.json();

// const mystry=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&page=1&sort_by=popularity.desc&with_genres=9648&year=1998")
// const data15=await mystry.json();
// const combinedData = {
//           movies: data1.results || [],
//           horror: data2.results || [],
//           action:data3.results ||[],
//           adventure:data4.results||[],
//           kids:data5.results||[],
//           tvSeries:data6.results||[],
//           comedy:data7.results||[],
//           crime:data8.results||[],
//           thriller:data9.results||[],
//           music:data10.results||[],
//           popular:data11.results||[],
//           family:data12.results||[],
//           science:data13.results||[],
//           documentry:data14.results||[],
//           mystry:data15.results||[],
//         };

//         setFetchData(combinedData);
//         dispatch(setApiData(combinedData));
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataFromAPI();
//   }, []);

//   console.log("fetchData", fetchData);

//   return (
//     <>
//       <>
//        <div style={{backgroundColor:'#160455'}}>
        
//        </div>
//       </>
//     </>
//   );
// };

// export default Request;
