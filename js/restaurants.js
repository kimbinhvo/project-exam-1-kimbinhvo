const baseUrl = "https://www.kimbinhvo.one/wp-json/wp/v2/posts?_embed&per_page=13";
const postContainer = document.querySelector(".featured-restaurants");
const button = document.querySelector("button");


async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);

    for(let i = 0; i < posts.length; i++){
        if(i === 10){
            break;
        }
            
        postContainer.innerHTML += `<div class="products-restaurants"> 
                                    <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}">        
                                    <h3> ${posts[i].title.rendered} </h3>
                                    <p> ${posts[i].excerpt.rendered} </p>
                                    <a class="cta-product-restaurants" href="specific.html?id=${posts[i].id}">Read More</a>
                                   </div>`; 

         button.onclick = function() {
            for(let i = 10; i < posts.length; i++){
                postContainer.innerHTML += `<div class="products-restaurants"> 
                                            <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}">        
                                            <h3> ${posts[i].title.rendered} </h3>
                                            <p> ${posts[i].excerpt.rendered} </p>
                                            <a class="cta-product-restaurants" href="specific.html?id=${posts[i].id}">Read More</a>
                                             </div>`; 
                document.getElementById("buttonid").style.display ="none";
            }    
        }       
    }
}


getPosts(baseUrl);