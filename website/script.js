async function user_story_1() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let tag = document.createElement("user_story_1");
            tag.innerHTML = JSON.stringify(data);
            document.body.appendChild(tag);
        });
}

function user_story_2() {
    fetch("http://localhost/data/OpenJsonData_wifi.json")
        .then(response => response.json())
        .then(data => console.log(data));
}

function user_story_3() {
    document.getElementById("job").innerHTML = ""
    let loader = document.createElement("div")
    loader.classList.add("loading")
    document.getElementById("job").appendChild(loader)

    fetch("http://localhost/data/OpenJsonData_wifi.json")
        .then(response => response.json())
        .then(data => {
            let title = document.createElement("a")
            let place = document.createElement("div")
            let description = document.createElement("div")

            title.id = "title"
            place.id = "place"
            description.id = "description"

            document.getElementById("job").innerHTML = ""
            document.getElementById("job").appendChild(title)
            document.getElementById("job").appendChild(place)
            document.getElementById("job").appendChild(description)

            random = Math.floor(Math.random() * data.length)
            document.getElementById("title").innerHTML = data[random].Titel
            document.getElementById("title").setAttribute("href", data[random].Url)
            document.getElementById("place").innerHTML = (data[random].Place + ", " + data[random].Province)
            document.getElementById("description").innerHTML = data[random].Description
        })
        .catch(er => {
            document.getElementById("job").innerHTML = ""
            let error = document.createElement("div")
            error.id = "error"
            error.innerHTML = "Leider ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu!"
            document.getElementById("job").appendChild(error)
        });
}

//user_story_1()
//user_story_2()