import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.02,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // remove both scrollbars
        margin: 0,
        padding: 0,
      }}
    >
      {/* Left side - Image */}
      <div
        style={{
          flex: 1,
          backgroundImage:
            "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fe82a2187787195.6590182b8cb57.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right side - Search and Info */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          height: "100%", // use 100% instead of 100vh
          overflow: "hidden", // remove scrolling
          backgroundImage: `
            linear-gradient(rgba(0, 123, 255, 0.3), rgba(0, 123, 255, 0.3)),
            url('https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ color: "black", margin: 0 }}>Weather App</h1>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}



// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";
// export default function WeatherApp(){

//     const [weatherInfo,setWeatherInfo]=useState({
//         city:"Delhi",
//         feelslike:24.84,
//         temp:25.05,
//         tempMin:25.02,
//         tempMax:25.05,
//         humidity:47,
//         weather:"haze"
//     });

//     let updateInfo=(newInfo)=>{
//         setWeatherInfo(newInfo);
//     }
//     return(
//         <div style={{textAlign:"centre"}}>
//             <h2>Weather App</h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={weatherInfo}/>
//         </div>
//     );
// }    