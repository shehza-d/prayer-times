//getting date from user
const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
// console.log(day + "-" + month + "-" + year);

let latitude;
let longitude;
// getting user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    // alert("Location Access deined or Geolocation is not supported by this browser.");
}
function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("latitude: " + latitude);
    console.log("longitude: " + longitude);
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}//location end
let myFunction = () => {
    // console.log("auto_function running");
    if (latitude == undefined) {
        alert("manual function running");
        let city = document.getElementById("city").value;
        document.querySelector("#city_name").innerText = city;
        axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=""&method=1`)
            .then(function (response) {
                // handle success
                const data = response.data;
                console.log(data);

                // document.querySelector("#date").innerText = data.data.date.gregorian.date;

                document.querySelector("#day").innerText = data.data.date.gregorian.weekday.en;
                // document.querySelector("#date").innerHTML = data.data.date.hijri.date;
                // document.querySelector("#date").innerHTML = data.data.date.hijri.day;


                document.querySelector("#namaz1").innerText = `Fajr : ${data.data.timings.Fajr}`
                document.querySelector("#namaz2").innerText = `Dhuhr : ${data.data.timings.Dhuhr}`;
                document.querySelector("#namaz3").innerText = `Asr : ${data.data.timings.Asr}`;
                document.querySelector("#namaz4").innerText = `Maghrib : ${data.data.timings.Maghrib}`;
                document.querySelector("#namaz5").innerText = `Isha : ${data.data.timings.Isha}`;
            })
    } else {   //1398332113 time stamp
        axios.get(`https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${latitude}&longitude=${longitude}&method=1`)
            .then(function (response) {
                // handle success
                const data = response.data;
                console.log(data);

                document.querySelector("#namaz1").innerText = `Fajr : ${data.data.timings.Fajr}`
                document.querySelector("#namaz2").innerText = `Dhuhr : ${data.data.timings.Dhuhr}`;
                document.querySelector("#namaz3").innerText = `Asr : ${data.data.timings.Asr}`;
                document.querySelector("#namaz4").innerText = `Maghrib : ${data.data.timings.Maghrib}`;
                document.querySelector("#namaz5").innerText = `Isha : ${data.data.timings.Isha}`;
           
            })
    }
}

// let myFunction = () => {


    // let city = document.getElementById("city").value;
    // document.querySelector("#city_name").innerText = city;
    // axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=""&method=1`)
    //     .then(function (response) {
    //         // handle success
    //         const data = response.data;
    //         console.log(data);

    //         // document.querySelector("#date").innerText = data.data.date.gregorian.date;
    //         document.querySelector("#day").innerText = data.data.date.gregorian.weekday.en;

    //         document.querySelector("#namaz1").innerText = `Fajr : ${data.data.timings.Fajr}`
    //         document.querySelector("#namaz2").innerText = `Dhuhr : ${data.data.timings.Dhuhr}`;
    //         document.querySelector("#namaz3").innerText = `Asr : ${data.data.timings.Asr}`;
    //         document.querySelector("#namaz4").innerText = `Maghrib : ${data.data.timings.Maghrib}`;
    //         document.querySelector("#namaz5").innerText = `Isha : ${data.data.timings.Isha}`;
    //     })
    // }














    //maarig sir api       https://api.aladhan.com/v1/timingsByCity?city=${city}&country=""&method=8
    //zaid 617   api       https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1
    //                     http://api.aladhan.com/v1/calendarByAddress?address=Sultanahmet%20Mosque,%20Istanbul,%20Turkey&method=2&month=04&year=2017
    // my recommendation   https://api.aladhan.com/v1/timings/1398332113?latitude=51.508515&longitude=-0.1254872&method=1
    // let cityy = document.querySelector("#city").value;



// }
