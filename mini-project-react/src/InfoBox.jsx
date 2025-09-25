import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const INIT_URL= "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    const HOT_URL="https://images.unsplash.com/photo-1549389055-008961ff0002?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL="https://images.unsplash.com/photo-1606367199370-4852f9506648?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL="https://plus.unsplash.com/premium_photo-1664910358669-b19dce4be056?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
       <div className="cardContainer">
     <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        sx={{ height: 174,width:350}}
        image={info.humidity > 80                         //checking codition to show image as per the temp on screen 
           ? RAIN_URL: info.temp > 16
           ? HOT_URL:COLD_URL}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80                         //checking codition to show image as per the temp on screen 
           ? <ThunderstormIcon/>: info.temp > 16
           ?  <SunnyIcon/>:<AcUnitIcon/>}
            
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
           <div>Humidity = {info.humidity}</div>
            <div>Min Temp = {info.tempMin}&deg;C</div>
            <div>Max Temp = {info.tempMax}&deg;C</div>
             <div>Weather feels like = {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
}