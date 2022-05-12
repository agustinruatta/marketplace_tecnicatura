fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1')
    .then(response => response.json())
    .then(json => {
        let titulo = document.getElementById('titulo-producto')
        titulo.appendChild(document.createTextNode(json.title))

        let descripcion = document.getElementById('descripcion-producto');
        descripcion.appendChild(document.createTextNode(json.description));

        let link = document.getElementById('link-producto');
        link.href = json.factory_url;

        let precio = document.getElementById('precio-producto');
        precio.appendChild(document.createTextNode(json.price));

        let imagen = document.getElementById('imagen-producto');
        imagen.src = json.image_url;
    })