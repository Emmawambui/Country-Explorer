const countriesListNode = document.querySelector("#countries")



async function fetchAllCountries(){
    return fetch(`http://localhost:3000/countries`, {
            headers: {
                "Content-type": "application/json",
            }
    })
    .then(resp => resp.json())
    .then(countries => countries)
    console.log(countries);
}
async function renderCountriesList(){
    const countries = await fetchAllCountries()
    countries.forEach(country => {
        const li=document.createElement("li")
        li.textContent= country.name
        li.id= country.id
        li.addEventListener("click", handleDisplayMovie)
         
        countriesListNode.appendChild(li)
    });
}
















window.onload= renderCountriesList
