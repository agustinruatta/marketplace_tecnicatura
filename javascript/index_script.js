fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
    .then(response => response.json())
    .then(json => {
        let textNode = document.createTextNode('Cantidad de productos: ' + json.amount_of_products);

        document.getElementById('cantidad-productos').appendChild(textNode)
    })