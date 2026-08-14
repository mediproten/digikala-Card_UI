const erorMesage = document.querySelector("#eror");

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        userId: 11,
        title: "helloo",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae voluptates distinctio aliquid."
    })
}).then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
