// search input 
const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clr data 

    searchField.value = ' ';


// load phone Data 
const url ='https://openapi.programming-hero.com/api/phones?search=iphone'
 fetch (url)
 .then(res =>res.json())
 .then(data => displayPhone(data))
}

const displayPhone = Phones =>{
    console.log(Phones)
}