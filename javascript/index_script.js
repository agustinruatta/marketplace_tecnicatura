fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products')
    .then((response) => response.json())
    .then(mostrarProductos);

function mostrarProductos(json) {
    json.forEach((productData) => {
        let image = document.createElement('img');
        image.src = productData.image_url;
        image.alt = 'Imagen de notebook';
        image.className = 'product-image';

        let productName = document.createElement('p');
        productName.appendChild(document.createTextNode(productData.title));

        let description = document.createElement('p');
        description.appendChild(document.createTextNode(productData.description));
        description.className = 'product-description';

        let div = document.createElement('div');
        div.className = 'product';
        div.appendChild(image);
        div.appendChild(productName);
        div.appendChild(description);

        document.getElementById('product-list').appendChild(div);
    });
}