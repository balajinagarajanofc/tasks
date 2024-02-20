const data = new XMLHttpRequest(); // creating a new request
data.open("GET", "https://restcountries.com/v3.1/all"); // connection establishment to API
data.send(); // contacting the API server
data.onload = function () {
  const request = JSON.parse(this.response);
  for (let i = 0; i < request.length; i++) {
    console.log(request[i].flags.png); // to print flags 
  }
};
