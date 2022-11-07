
//function for printing data in console
function buttonClicked(){

  var city =document.getElementById("city_input").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=658767b0ae936b022f59a69f44868419&units=metric`)

  .then((response)=> response.json())
  .then((data)=> {
      var info=data
      if(info.cod == 200){
          console.log(info)
          console.log("the temp celcius: ",info.main.temp)
          console.log("the longitude: ",info.coord.lon)
          console.log("the latitude: ",info.coord.lat)
          console.log("wind speed: ",info.wind.speed)
          console.log("the deg: ",info.wind.deg)
          console.log("weather is: ",info.weather[0].description)
          document.getElementById("wind").append((info.wind.speed))
          document.getElementById("temp").append((info.main.temp))
          document.getElementById("long").append((info.coord.lon))
          document.getElementById("lat").append((info.coord.lat))
          document.getElementById("desc").append((info.weather[0].description))
      }
      else{
        console.log(data.message)
        document.getElementById("find").append((data.message))
      }
    });
}