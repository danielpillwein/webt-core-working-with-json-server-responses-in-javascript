async function fetchData() {
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

fetchData().then(r => document.body.insertAdjacentElement("afterbegin", r));