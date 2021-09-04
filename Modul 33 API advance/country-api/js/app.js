fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))


const displayCountry = (countries) => {
    const countriesSection = document.getElementById('countries');
    // for (const country of countries) {
    //     const li = document.createElement('li');
    //     li.innerText = country.name;
    //     countriesUi.appendChild(li);
    //     console.log(country);
    // }
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onClick="loadCountryByName('${country.name}')">Details</button>
        `
        countriesSection.appendChild(div);
        // console.log(country);
    })

}
const loadCountryByName = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))
}

const displayDetails = country => {
    const displayDiv = document.getElementById('display-details');
    displayDiv.innerHTML = `
        <div>
            <img width="200" src="${country.flag}" alt="">
            <h3>${country.name}</h3>
            <p>Population: ${country.population}</p>
        </div>
   `;
    console.log(country);
}