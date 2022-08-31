const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const countriesSecton = document.getElementById('countries-container');
    countries.forEach(country => {
        const childDiv = document.createElement('div');
        childDiv.classList.add('single-country');
        childDiv.innerHTML = `
        <h3> Country: ${country.name.common}</h3>
        <p> Capital: ${country.capital ? country.capital[0] : 'there is no Capital'}
        <br>
        <button onclick="loadCountriesDatils('${country.cca2}')">Datils</button>
        `
        countriesSecton.appendChild(childDiv);
    });
}
const loadCountriesDatils = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDatils(data[0]))
}
const displayDatils = country => {
    const countryDatils = document.getElementById('contry-datils')
    countryDatils.innerHTML = `
    <h3>Country Code: ${country.name.common}</h3>
    <img src="${country.flags.png}">

    `


}

loadCountries();
