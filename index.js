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
   return fetch(`http://https://json-server-template-xewz.onrender.com/countries`, {
            headers: {
                "Content-type": "application/json",
            }
    })
    .then(resp => resp.json())
    .then(countries => countries)
}

async function fetchCountryById(id){
    return fetch( `https://json-server-template-xewz.onrender.com/countries/${id}`, {
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
    console.log(gallery);
    const galleryNode = document.querySelector("#main-gallery");
    gallery.forEach(url => {
      const li = document.createElement("li");
      const image = document.createElement("img");
      image.src = url;
  
      li.appendChild(image);
      galleryNode.appendChild(li);
    });
    handleFormSubmit(event)
  }
  async function fetchUsers(){
    return fetch(`https://json-server-template-xewz.onrender.com/users`, {
             headers: {
                 "Content-type": "application/json",
             }
     })
     .then(resp => resp.json())
     .then(users => users)
 }
 
  
  function handleFormSubmit(event) {
    event.preventDefault(); 
    const form = document.querySelector("#emails");
    form.addEventListener("submit", handleFormSubmit);
     
    const emailInput = document.querySelector("#email");
    const email = emailInput.value;
    
    console.log("Submitted email:", email);
    
    const successMessage = document.createElement("p");
    successMessage.textContent = "Thank you for signing up!";
    const messageContainer = document.querySelector("#message");
    document.body.appendChild(successMessage);
    
    
    emailInput.value = "Your Email";
  }
 
const deleteButtonNode = document.querySelector("#delete");
const postButtonNode = document.querySelector("#post");

// Event listeners
// formListNode.addEventListener("submit", handleCountrySearch);
// deleteButtonNode.addEventListener("click", handleCountryDelete);
// postButtonNode.addEventListener("click", handleCountryPost);

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

async function handleCountryPost(e) {
  e.preventDefault();
  const countryData = {
    name: "New Country",
    Official_language: "Language",
    currency: "Currency",
    population: 0,
    capital_city: "Capital City",
    car_side: "Car Side",
    flag: "https://example.com/flag.jpg",
    capital_city_pic: "https://example.com/capital.jpg",
    gallery: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
  };
  await postCountry(countryData);
  // Refresh the country list after posting
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

async function postCountry(countryData) {
  return fetch(`https://json-server-template-xewz.onrender.com/countries`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(countryData),
  });
}


  















 window.onload= renderCountriesList
