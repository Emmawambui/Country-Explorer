const countriesListNode = document.querySelector("#countries")
const formListNode = document.querySelector("#forms")

form.addEventListener("submit", handleCountrySearch)


function handleCountrySearch(e){
    e.preventDefault()
    const countryId = countriesListNode.value
    
    renderCountryListDetail(countryId)
    
    
}

async function renderCountriesList(){
    const countries = await fetchAllCountries()
    
    countries.forEach(country => {
        const option = document.createElement("option")
        option.value = country.id
        option.textContent = country.name
        option.addEventListener("submit", handleCountrySearch)
        
        countriesListNode.appendChild(option)
    });

}

async function fetchAllCountries(){
   return fetch(`https://json-server-template-xewz.onrender.com/countries`, {
            headers: {
                "Content-type": "application/json",
            }
    })
    .then(resp => resp.json())
    .then(countries => countries)
}

async function fetchCountryById(id){
    return fetch( `http://localhost:3000/countries/${id}`, {
        headers: {
            "Content-type": "application/json",
        }
})
.then(resp => resp.json())
.then(country => {
    return country
})

}
async function renderCountryListDetail(id){
const country = await fetchCountryById(id)

   
        const countryInfo= document.querySelector("#facts")
        const name = countryInfo.querySelector("#name span")
        const OfficialLanguage = countryInfo.querySelector("#lan span")
        const currency = countryInfo.querySelector("#currency span")
        const population = countryInfo.querySelector("#population span")
        const carSide = countryInfo.querySelector("#car span")
        const capitalCity = countryInfo.querySelector("#city span")
        const img= countryInfo.querySelector("#flag span img")
        const capitalCityImage = document.querySelector("#capitalCity img")


        name.textContent = country.name
        OfficialLanguage.textContent = country.Official_language
        currency.textContent = country.currency
        population.textContent = country.population
        carSide.textContent = country.car_side
        capitalCity.textContent = country.capital_city
        img.src = country.flag
        capitalCityImage.src = country.capital_city_pic
        
        renderGallery(country.gallery)
}

function renderGallery(gallery) {
  
    const galleryNode = document.querySelector("#main-gallery");
    gallery.forEach(url => {
      const li = document.createElement("li");
      const image = document.createElement("img");
      image.src = url;
      
      li.appendChild(image);
      galleryNode.appendChild(li);
    });
    // handleFormSubmit(event)
  }
  async function fetchUsers(){
    return fetch(`http://localhost:3000/users`, {
             headers: {
                 "Content-type": "application/json",
             }
     })
     .then(resp => resp.json())
     .then(users => users)
 }
 const signUpForm = document.querySelector("#emails");
 signUpForm.addEventListener("submit", handleFormSubmit)
  
  function handleFormSubmit(event) {
    event.preventDefault(); 
    
    // form.addEventListener("submit", handleFormSubmit);
     console.log(event.target);
    const emailInput = document.querySelector("#email");
    const email = emailInput.value;

    alert("Thank you for signing up!");
    
     emailInput.value = "Your Email";
 }
 
const deleteButtonNode = document.querySelector("#delete");
function handleCountrySearch(e) {
  e.preventDefault();
  const countryId = countriesListNode.value;
  renderCountryListDetail(countryId);
}

async function handleCountryDelete(e) {
  e.preventDefault();
  const countryId = countriesListNode.value;
  await deleteCountry(countryId);
  // Refresh the country list after deletion
  await renderCountriesList();
}

async function deleteCountry(id) {
  return fetch(`http://https://json-server-template-xewz.onrender.com/countries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
}






 window.onload= renderCountriesList
