const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=49.75&lon=6.64&appid=12458339b3d9f04ad5c9a013d4b6463d'



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) 
        {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.____}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].icon;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('____', ____);
    captionDesc.textContent = `${desc}`;
}





apiFetch();