/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        
var apikey = {
    key: 'f52c1f8e-2a8d-4315-bfb3-38c84f7d2597'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey.key)
        .then((response) => {
            if(!response.ok) throw new Error('Erro ao executar a requesição, status' + 
            response.status);
            return response.json();
        })
        .then((api) => {
            var texto = "";
            
            for(let i=0; i<10; i++){
                texto = texto + 
                    '<div class="media">'
                        '<img scr="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" heigth="60">'
                        '<div class="media-body">'
                        '<h5 class="mt-2">{api.data[i].name}</h5>'
                        '<p>${api.data[i].symbol}</p>'
                        '<p>${api.data[i].first_historical_data}</p>'
                        '</div>'
                    '</div>';
                
                document.getElementsByName("coin").innerHTML = texto;
            }
            console.log(api);
        })
        .catch((error) => {
            console.error(error.mesage);
        });