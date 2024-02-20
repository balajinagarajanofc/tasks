const data = new XMLHttpRequest(); // creating a new request

data.open("GET", "https://restcountries.com/v3.1/all"); // connection establishment to API

data.send(); // contacting the API server

data.onload = function () {

  const request = JSON.parse(this.response);
  
  for (let i = 0; i < request.length; i++) {
  
    console.log(request[i].flags.png); // to print flags 
  }
};


![image](https://github.com/balajinagarajanofc/tasks/assets/128735982/8f87424a-98af-4bee-b3cd-5f539d26e193)
