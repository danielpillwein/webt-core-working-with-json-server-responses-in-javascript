async function user_story_1() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data =>{
        console.log(data)

        let tag = document.createElement("user_story_1");
        tag.innerHTML = JSON.stringify(data);
        document.body.appendChild(tag);
        });
}

function user_story_2(){
    fetch("http://localhost/data/OpenJsonData_wifi.json")
        .then(response => response.json())
        .then(data => console.log(data));
}
function user_story_3(){
    fetch("http://localhost/data/OpenJsonData_wifi.json")
        .then(response => response.json())
        .then(data => {
            random = Math.floor(Math.random()*data.length)
            console.log(data[random])
            document.getElementById("title").innerHTML = data[random].Titel
            document.getElementById("title").setAttribute("href",data[random].Url)
            document.getElementById("place").innerHTML = (data[random].Place+", "+data[random].Province)
            document.getElementById("description").innerHTML = data[random].Description
        });
}

//user_story_2()
//user_story_1()
