


async function search(event) {
    if (event.keyCode == 13) {
        status("loading");
        let apikey = "LIVDSRZULELA";

        let search_term = document.getElementById('search').value;
        let url = `https://api.tenor.com/v1/search?${search_term}&key=${apikey}`;

        let results = await fetch(url);
        let json = await results.json();

        let html = '';
        for (let i in json.results) {
            let Jresult = json.results;

            html += `<div class="col-md-4 "><div><img class=" w-100 p-1" src="${Jresult[i].media[0].gif.url} "/></div></div>`;
        }

        document.getElementById("button").style.display = "inline-block";
        status(html);

    }

}

$('#button').click(function () {
    location.reload();
});

function status(event) {
    document.querySelector(".gifs").innerHTML = event;
}