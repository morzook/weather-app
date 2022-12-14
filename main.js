let startPage = document.querySelector(".opening-container");
let defaultCities = document.querySelector('.default-cities')
let defaultCityOne = document.querySelector('.default-city-1')
let cityOneName = document.getElementById('city-1-name')
let cityOneIcon = document.querySelector('.city-1-icon')
let cityOneTemp = document.getElementById('city-1-temp')
let cityTwoName = document.getElementById('city-2-name')
let cityTwoIcon = document.querySelector('.city-2-icon')
let cityTwoTemp = document.getElementById('city-2-temp')
let cityThreeName = document.getElementById('city-3-name')
let cityThreeIcon = document.querySelector('.city-3-icon')
let cityThreeTemp = document.getElementById('city-3-temp')
let cityFourName = document.getElementById('city-4-name')
let cityFourIcon = document.querySelector('.city-4-icon')
let cityFourTemp = document.getElementById('city-4-temp')
let resultContainer = document.querySelector(".result-container");
let city = document.getElementById("city");
let check = document.querySelector(".check");
let cityName = document.querySelector(".city");
let date = document.querySelector(".date");
let errorMessage = document.querySelector(".err-msg");
let resultSvg = document.querySelector(".result-svg");
let temp = document.querySelector(".temp");
let tempDeg = document.querySelector(".temp-deg");
let degIcon = document.querySelector(".degree-icon");
let condition = document.querySelector(".condition");
let feelsLike = document.querySelector(".feels-like");
let humidityValue = document.querySelector(".humidity-value");
let windValue = document.querySelector(".wind-value");
let pressureValue = document.querySelector(".pressure-value");
let boxOneTemp = document.getElementById('box-1-temp')
let boxTwoTemp = document.getElementById('box-2-temp')
let boxTwoTime = document.getElementById('box-2-time')
let boxThreeTemp = document.getElementById('box-3-temp')
let boxThreeTime = document.getElementById('box-3-time')
let todayMinMax = document.getElementById('today-min-max')
let boxFourTemp = document.getElementById('box-4-temp')
let boxFourTime = document.getElementById('box-4-time')
let resultIcon = document.querySelector('.result-icon')
let todayBoxOneIcon = document.querySelector('.today-box-1-icon')
let todayBoxTwoIcon = document.querySelector('.today-box-2-icon')
let todayBoxThreeIcon = document.querySelector('.today-box-3-icon')
let todayBoxFourIcon = document.querySelector('.today-box-4-icon')

startPage.classList.remove('hide');
resultContainer.classList.add('hide');


let url = `https://api.openweathermap.org/data/2.5/weather?q=lagos&lang=en&units=metric&appid=7f05b8e85758de9b916d56bfdaec862e`;
fetch(url).then(response => {
    return response.json();
})
.then(startData => {
 cityOneName.innerText = 'Lagos';
 cityOneTemp.innerText = Math.round(startData.main.temp);


 startData.weather.forEach(items => {
    if (items.id < 250) {
        cityOneIcon.src = 'storm.PNG';
    } else if (items.id < 350) {
        cityOneIcon.src = 'drizzle.PNG';
    } else if (items.id < 550) {
        cityOneIcon.src = 'rain.PNG';
    } else if (items.id < 650) {
        cityOneIcon.src = 'snow.PNG';
    } else if (items.id < 800) {
        cityOneIcon.src = 'drizzle.PNG';
    }else if (items.id === 800) {
        cityOneIcon.src = 'clear.PNG';
    } else if (items.id > 800) {
        cityOneIcon.src = 'scattered clouds.PNG';
    }

})

let url = `https://api.openweathermap.org/data/2.5/weather?q=london&lang=en&units=metric&appid=7f05b8e85758de9b916d56bfdaec862e`;
fetch(url).then(response => {
    return response.json();
})
.then(startDataTwo => {
 cityTwoName.innerText = 'London';
 cityTwoTemp.innerText = Math.round(startDataTwo.main.temp);


 startDataTwo.weather.forEach(items => {
    if (items.id < 250) {
        cityTwoIcon.src = 'storm.PNG';
    } else if (items.id < 350) {
        cityTwoIcon.src = 'drizzle.PNG';
    } else if (items.id < 550) {
        cityTwoIcon.src = 'rain.PNG';
    } else if (items.id < 650) {
        cityTwoIcon.src = 'snow.PNG';
    } else if (items.id < 800) {
        cityTwoIcon.src = 'drizzle.PNG';
    }else if (items.id === 800) {
        cityTwoIcon.src = 'clear.PNG';
    } else if (items.id > 800) {
        cityTwoIcon.src = 'scattered clouds.PNG';
    }

})
})

let dataThree = `https://api.openweathermap.org/data/2.5/weather?q=sydney&lang=en&units=metric&appid=7f05b8e85758de9b916d56bfdaec862e`;
fetch(dataThree).then(response => {
    return response.json();
})
.then(startDataThree => {
 cityThreeName.innerText = 'sydney';
 cityThreeTemp.innerText = Math.round(startDataThree.main.temp);

 startDataThree.weather.forEach(items => {
    if (items.id < 250) {
        cityThreeIcon.src = 'storm.PNG';
    } else if (items.id < 350) {
        cityThreeIcon.src = 'drizzle.PNG';
    } else if (items.id < 550) {
        cityThreeIcon.src = 'rain.PNG';
    } else if (items.id < 650) {
        cityThreeIcon.src = 'snow.PNG';
    } else if (items.id < 800) {
        cityThreeIcon.src = 'drizzle.PNG';
    }else if (items.id === 800) {
        cityThreeIcon.src = 'clear.PNG';
    } else if (items.id > 800) {
        cityThreeIcon.src = 'scattered clouds.PNG';
    }

})
})

let dataFour = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&lang=en&units=metric&appid=7f05b8e85758de9b916d56bfdaec862e`;
fetch(dataFour).then(response => {
    return response.json();
})
.then(startDataFour => {
 cityFourName.innerText = 'tokyo';
 cityFourTemp.innerText = Math.round(startDataFour.main.temp);

 startDataFour.weather.forEach(items => {
    if (items.id < 250) {
        cityFourIcon.src = 'storm.PNG';
    } else if (items.id < 350) {
        cityFourIcon.src = 'drizzle.PNG';
    } else if (items.id < 550) {
        cityFourIcon.src = 'rain.PNG';
    } else if (items.id < 650) {
        cityFourIcon.src = 'snow.PNG';
    } else if (items.id < 800) {
        cityFourIcon.src = 'drizzle.PNG';
    }else if (items.id === 800) {
        cityFourIcon.src = 'clear.PNG';
    } else if (items.id > 800) {
        cityFourIcon.src = 'scattered clouds.PNG';
    }

})
})




})




check.addEventListener("click", () => {
    startPage.classList.add('hide')
    // defaultCities.classList.add('hide')
    resultContainer.classList.remove('hide')
    let key = `7f05b8e85758de9b916d56bfdaec862e`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&units=metric&appid=${key}`;
    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
     cityName.innerText = 'current weather in ' + city.value;
     date.innerText = new Date().toLocaleDateString();
     degIcon.innerText = '??';
     temp.innerText = Math.round(data.main.temp);
     condition.innerText = data.weather[0].description;
     feelsLike.innerText = 'Real feel ' + Math.round(data.main.feels_like)+ '??';
     humidityValue.innerText = data.main.humidity;
     windValue.innerText = data.wind.speed + 'km/h';
     pressureValue.innerText = data.main.pressure;
     boxOneTemp.innerText = Math.round(data.main.temp);

     
    data.weather.forEach(items => {
        if (items.id < 250) {
            resultIcon.src = 'storm.PNG';
        } else if (items.id < 350) {
            resultIcon.src = 'drizzle.PNG';
        } else if (items.id < 550) {
            resultIcon.src = 'rain.PNG';
        } else if (items.id < 650) {
            resultIcon.src = 'snow.PNG';
        } else if (items.id < 800) {
            resultIcon.src = 'drizzle.PNG';
        }else if (items.id === 800) {
            resultIcon.src = 'clear.PNG';
        } else if (items.id > 800) {
            resultIcon.src = 'scattered clouds.PNG';
        }
    
    })


    
let weatherNow = data.weather[0].id
if (weatherNow < 250) {
   todayBoxOneIcon.src = 'storm.PNG';
} else if (weatherNow < 350) {
   todayBoxOneIcon.src = 'drizzle.PNG';
} else if (weatherNow < 550) {
   todayBoxOneIcon.src = 'rain.PNG';
} else if (weatherNow < 650) {
   todayBoxOneIcon.src = 'snow.PNG';
} else if (weatherNow < 800) {
   todayBoxOneIcon.src = 'drizzle.PNG';
}else if (weatherNow === 800) {
todayBoxOneIcon.src = 'clear.PNG';
} else if (weatherNow > 800) {
   todayBoxOneIcon.src = 'scattered clouds.PNG';
}
    
    
    city.value = '';
})


.catch (err => alert('Wrong City Name'))


fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&lang=en&units=metric&appid=${key}`)
.then(response => {
    return response.json();
})
.then(data2 => {
    const HH_MM = {hour: '2-digit', minute: '2-digit' }
    boxTwoTemp.innerText = Math.round(data2.list[1].main.temp);
    boxTwoTime.innerText = new Date(new Date().getTime() + 3*60*60*1000).toLocaleTimeString('en-US', HH_MM).replace(/AM|PM/,'')
    boxThreeTemp.innerText = Math.round(data2.list[2].main.temp);
    boxThreeTime.innerText = new Date(new Date().getTime() + 6*60*60*1000).toLocaleTimeString('en-US', HH_MM).replace(/AM|PM/,'')
    boxFourTemp.innerText = Math.round(data2.list[3].main.temp);
    boxFourTime.innerText = new Date(new Date().getTime() + 9*60*60*1000).toLocaleTimeString('en-US', HH_MM).replace(/AM|PM/,'')

 let weatherInThreeHours = data2.list[1].weather[0].id
 if (weatherInThreeHours < 250) {
    todayBoxTwoIcon.src = 'storm.PNG';
} else if (weatherInThreeHours < 350) {
    todayBoxTwoIcon.src = 'drizzle.PNG';
} else if (weatherInThreeHours < 550) {
    todayBoxTwoIcon.src = 'rain.PNG';
} else if (weatherInThreeHours < 650) {
    todayBoxTwoIcon.src = 'snow.PNG';
} else if (weatherInThreeHours < 800) {
    todayBoxTwoIcon.src = 'drizzle.PNG';
}else if (weatherInThreeHours === 800) {
todayBoxTwoIcon.src = 'clear.PNG';
} else if (weatherInThreeHours > 800) {
    todayBoxTwoIcon.src = 'scattered clouds.PNG';
}



let weatherInSixHours = data2.list[2].weather[0].id
if (weatherInSixHours < 250) {
   todayBoxThreeIcon.src = 'storm.PNG';
} else if (weatherInSixHours < 350) {
   todayBoxThreeIcon.src = 'drizzle.PNG';
} else if (weatherInSixHours < 550) {
   todayBoxThreeIcon.src = 'rain.PNG';
} else if (weatherInSixHours < 650) {
   todayBoxThreeIcon.src = 'snow.PNG';
} else if (weatherInSixHours < 800) {
   todayBoxThreeIcon.src = 'drizzle.PNG';
}else if (weatherInSixHours === 800) {
todayBoxThreeIcon.src = 'clear.PNG';
} else if (weatherInSixHours > 800) {
   todayBoxThreeIcon.src = 'scattered clouds.PNG';
}


let weatherInNineHours = data2.list[3].weather[0].id
if (weatherInNineHours < 250) {
   todayBoxFourIcon.src = 'storm.PNG';
} else if (weatherInNineHours < 350) {
   todayBoxFourIcon.src = 'drizzle.PNG';
} else if (weatherInNineHours < 550) {
   todayBoxFourIcon.src = 'rain.PNG';
} else if (weatherInNineHours < 650) {
   todayBoxFourIcon.src = 'snow.PNG';
} else if (weatherInNineHours < 800) {
   todayBoxFourIcon.src = 'drizzle.PNG';
}else if (weatherInNineHours === 800) {
todayBoxFourIcon.src = 'clear.PNG';
} else if (weatherInNineHours > 800) {
   todayBoxFourIcon.src = 'scattered clouds.PNG';
}





})
})

