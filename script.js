let myFunction = () => {

// getting user location


















// http://api.aladhan.com/v1/calendarByAddress?address=Sultanahmet%20Mosque,%20Istanbul,%20Turkey&method=2&month=04&year=2017

    // let cityy = document.querySelector("#city").value;
    axios.get(`https://api.aladhan.com/v1/timings/1398332113?latitude=51.508515&longitude=-0.1254872&method=1`)
        .then(function (response) {
            // handle success
            const data = response.data;

            console.log(data);

           




            // document.querySelector("#tempC").innerText = data.current.temp_c + "°C";
           




        })


}
// getWeatherData();

    // 25175e31b7074cfc895204529222906 key
