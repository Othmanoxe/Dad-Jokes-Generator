const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "EGIgRlhdaYhViFb1gtdX5w==wko7C4nkszWGyG60"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key" : apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
/**the try and catch method is similar to that of "if/else" */

    try {
        /**this used to change the joke and the btn's content when the website is loading.*/
        jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "loading...";

/*"fetch is used to fetch data from an api to our website"*/

/** the await function is always accompanied with the "async" in the begining of the function*/ 

    const response = await fetch(apiURL, options);
    const data = await response.json();
/**this is used to render the btn's content to its default format */
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "Please try again later. Your internet needs therapy, it has connection issues.";
        btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE"; 
        console.log("error");
    }

    
}


btnEl.addEventListener("click", getJoke);
