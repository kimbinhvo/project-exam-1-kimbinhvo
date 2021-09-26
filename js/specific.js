const restaurantInfo = document.querySelector(".specific");
const newTitle = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url = "https://www.kimbinhvo.one/wp-json/wp/v2/posts?_embed&include=" + id;

async function fetchRestaurants() {
    try {
        const response = await fetch(url);
        const restaurant = await response.json();
        console.log(restaurant);

        restaurantInfo.innerHTML +=`<img id="img" src="${restaurant[0]._embedded['wp:featuredmedia']['0'].source_url}">    
                                    <div class="specific-grid">  
                                        <h2> ${restaurant[0].title.rendered} </h2>
                                        <p> ${restaurant[0].date} <p>   
                                        <p> ${restaurant[0].content.rendered} </p>
                                    </div>`;   

        newPageTitle = " Restaurants in Oslo | Specific | " + restaurant[0].title.rendered;
        document.title = newPageTitle;
        console.log(newTitle);

    } catch(error) {
        console.log(error);
    }
}

fetchRestaurants();