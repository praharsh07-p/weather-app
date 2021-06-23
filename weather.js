let weather={
  "apikey":"65f5027ad9fb3480befedd8f84202356",
  fetchweather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
       "&units=metric&appid=65f5027ad9fb3480befedd8f84202356" //+
      //+ this.apikey
  ).then((response) => response.json())
   .then((data) => this.displayweather(data));

 },
 displayweather : function (data) {
   const {name}=data;
   const {icon, description}=data.weather[0];
   const {temp,humidity} = data.main;
   const {speed} =data.wind;
   //console.log(name,icon,description,temp,humidity,speed);
   document.querySelector(".city").innerText= "Weather in" + " " +name;
   document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + "@2x.png";
   document.querySelector(".description").innerText=description;
   document.querySelector(".temp").innerText = temp + "°C";
   document.querySelector(".humidity").innerText="Humidity: " + humidity +" "+ "%";
   document.querySelector(".wind").innerText="Wind speed: " + speed + " " + "km/h";

 },
 search: function(){
   this.fetchweather(document.querySelector(".searchbar").value);

 },
};
document.querySelector(".search button").addEventListener("onclick",function(){
  weather.search();
});
document.querySelector(".searchbar").addEventListener("keyup",function(event){
  if (event.key=="Enter"){
    weather.search();
  }
})
