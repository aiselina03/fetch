let hash = window.location.hash
hash = hash.substring(1)
// console.log(hash);

fetch(`https://northwind.vercel.app/api/categories/${hash}`)
    .then((res) => res.json())
    .then((data) =>
        document.body.innerHTML += `
    <ul> 
    <a href="https://northwind.vercel.app/api/categories/${data.id}">
   <li>${data.id}</li>
   <li>${data.name}</li>
   <li>${data.description}</li>
    </a>
    </ul>
    `
    )
