function sendText() {    
    var text = document.getElementById('given_text').value;    
    if (text == '')
        alert('Por favor insira um texto para a análise.');
    else {
        // show loading spinner
        document.getElementById('spinner').removeAttribute('style');

        var data = {
            text: document.getElementById('given_text').value,
            model_id: 'pt-en-conversational'
        };
    
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", '/lang-translator', true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var body = JSON.parse(this.response);
                    if (body.tones.length > 0) {
                        // remove info text
                        document.getElementById('info_text').setAttribute('style','display:none;');
    
                        var result_text = "Tons detectados: ";
                        var list = "<ul class='collection'>";
                        for (var i in body.tones)
                            list = list + "<li class='collection-item'>" + body.tones[i].tone_name + "</li>";
                        list = list + "</ul>";
                        document.getElementById('result_text').innerHTML = result_text;
                        document.getElementById('result_text').insertAdjacentHTML('beforeend',list);
                    } else
                        alert('Não foi possível detectar nenhuma emoção ou tom dominante.');
                        // alert('Could not detect any dominant tone or emotion.');
                }
                if (this.status != 200)
                    alert('Um erro ocorreu, por favor tente mais tarde.');
                    // alert('An error occured, please try again later.');
                // hide loading spinner
                document.getElementById('spinner').setAttribute('style','display:none;');
            }    
        };
        xhttp.send(JSON.stringify(data));
    }
}