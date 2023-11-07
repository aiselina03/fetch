fetch("https://northwind.vercel.app/api/categories/")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            document.body.innerHTML += `
        <ul> 
        <a href="./detail.html#${element.id}">
        <li>${element.id} </li>
        <li>${element.name} </li>
        <li>${element.description} </li>
        </ul>
        `
        });
    })