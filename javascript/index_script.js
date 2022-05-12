fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
    .then(response => response.json())
    .then(json => {
        let textNode = document.createTextNode('Cantidad de productos: ' + json.amount_of_products);

        document.getElementById('cantidad-productos').appendChild(textNode)
    })


fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products')
    .then(response => response.json())
    .then(json => {
        for(let producto of json) {
            let imagen = document.createElement('img');
            imagen.src = producto.image_url;
            imagen.className = 'product-image';
            imagen.alt = 'Imagen de notebook';

            let nombre = document.createElement('p');
            nombre.appendChild(document.createTextNode(producto.title));

            let descripcion = document.createElement('p');
            descripcion.appendChild(document.createTextNode(producto.price));

            let div = document.createElement('div');
            div.appendChild(imagen);
            div.appendChild(nombre);
            div.appendChild(descripcion);
            div.className = 'product'

            document.getElementById('product-list').appendChild(div);
        }
    })