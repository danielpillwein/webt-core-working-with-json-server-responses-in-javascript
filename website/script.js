async function user_story_1() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (response.ok) {
        let json = await response.json();
        console.log(json)

        let tag = document.createElement("pre");
        tag.innerHTML = JSON.stringify(json, null, 2);

        return tag;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

function user_story_2(){
    fetch("http://localhost/website/data/OpenJsonData_wifi.json")
        .then(response => response.json())
        .then(data => console.log(data));
}
function user_story_3(){
    fetch("http://localhost/website/data/OpenJsonData_wifi.json")
        .then(response => response.json())
        .then(data => {
            random = Math.floor(Math.random()*data.length)
            console.log(data[random])
            document.getElementById("title").innerHTML = data[random].Titel
            document.getElementById("province").innerHTML = data[random].Province
            document.getElementById("place").innerHTML = data[random].Place
            document.getElementById("description").innerHTML = data[random].Description
            url = data[random].Url
            document.getElementById("link").setAttribute("href",url)
            document.getElementById("link").innerHTML = "weitere Infos"
            
        });
}

//user_story_2()
//user_story_1().then(r => document.body.insertAdjacentElement("afterbegin", r));
