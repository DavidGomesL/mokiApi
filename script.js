async function getMoki() {
    try {
        let response = await fetch("https://66299f4067df268010a1276b.mockapi.io/Products/products")
        let data = await response.json()

        for (let index = 0; index < data.length; index++) {

            let tbody = document.querySelector("tbody")
            let row = document.createElement("tr")
            row.innerHTML = `
                                <tr>
                                    <th scope="row">${data[index].id}</th>
                                    <td>${data[index].name}</td>
                                    <td>${data[index].price}</td>
                                    <td>${data[index].description}</td>
                                    <td>${data[index].material}</td>
                                    <td>${data[index].department}</td>
                                </tr>
            `

            tbody.appendChild(row)


        }



    } catch {
        console.log("Error")
    }
}
getMoki()