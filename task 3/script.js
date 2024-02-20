const data = new XMLHttpRequest(); // creating a new request
data.open("GET", "https://restcountries.com/v3.1/all"); // connection establishment to API
data.send(); // contacting the API server
data.onload = function () {
  const request = JSON.parse(this.response);
  for (let i = 0; i < request.length; i++) {
    console.log("Country Name :", request[i].name.common); // to print all country names
    console.log("Region :", request[i].region); //   to print regions
    console.log("Sub-region :", request[i].subregion); //   to print sub regions
    console.log("Population:", request[i].population); //   to print population
    console.log("-------"); // to print a ---- line
  }
};
