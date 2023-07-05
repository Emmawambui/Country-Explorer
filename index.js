const countriesListNode = document.querySelector("#countries")
const formListNode = document.querySelector("#forms")

form.addEventListener("submit", handleCountrySearch)


function handleCountrySearch(e){
    e.preventDefault()
    const inputValue = countriesListNode.value
    console.log(inputValue);
    
}

async function renderCountriesList(){
    const countries = await fetchAllCountries()
    countries.forEach(country => {
        const option = document.createElement("option")
        option.value = country.id
        option.textContent = country.name
        
        countriesListNode.appendChild(option)
    });

}

async function fetchAllCountries(){
   return fetch(`http://localhost:3000/countries`, {
            headers: {
                "Content-type": "application/json",
            }
    })
    .then(resp => resp.json())
    .then(countries => countries)
}















 window.onload= renderCountriesList
