const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const countriesSecton = document.getElementById('countries-container');
    countries.forEach(country => {
        const childDiv = document.createElement('div');
        childDiv.innerHTML = `
        <h3> Country: ${country.name.common}</h3>
        <p> Capital: ${country.capital ? country.capital[0] : 'there is no Capital'}
        `
        countriesSecton.appendChild(childDiv);
    });
}
loadCountries();