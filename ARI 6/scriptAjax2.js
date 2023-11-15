//executa a função anônima depois que toda a página for carregada
window.onload = function() {
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    let minhaAPI = "" ;
    let resultado;
    let cidade;

    //refere-se à atribuição de um manipulador de eventos ao elemento HTML select com o ID cidades. O evento onchange é um tipo de evento de escuta que dispara quando o valor do elemento que está sendo escutado muda. No caso de um elemento select, isso acontece quando um usuário escolhe uma opção diferente no menu suspenso.
    cidades.onchange = function() {  //Esta linha está atribuindo uma função anônima como manipulador para o evento onchange do elemento select. Quando o evento onchange ocorre (ou seja, quando o usuário seleciona uma opção diferente), a função anônima é executada.


        //criando o objeto ajax dependendo do navegador. (criando um objeto XMLHttpRequest, que será usado para fazer uma requisição HTTP GET à API de tempo).
       var ajax = null;
        //se no navegador existir o XMLHttpRequest(), ele cria por essa metodologia
       if (window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
        //se no navegar não existir ele usa ActivXObject
    }else if(window.ActiveXObject){
        ajax = new ActiveXObject("Msxml2.XMLHTTP");
    }

    cidade = cidades.value //A variável cidade é definida como o valor do item selecionado no select (cidades.value). Se o usuário selecionou uma cidade válida (ou seja, cidade != 0, assumindo que o valor 0 é usado para a opção padrão "Escolha uma cidade"), a requisição é preparada e enviada.

    if(cidade !=0) { 
    //A função open do objeto XMLHttpRequest é configurada com a URL da requisição, que inclui a chave da API, o identificador da cidade selecionada, unidades métricas e o idioma português.
    ajax.open("GET", url + 'appid=' + minhaAPI + '&q='+ cidade + '&units=metric&lang=pt', true);
    //não envia nada
    //O método send é chamado para enviar a requisição ao servidor da API de tempo.
    ajax.send(null);
    //Após enviar a requisição, o código define outro manipulador de eventos, onreadystatechange, para o objeto XMLHttpRequest. Este manipulador será chamado toda vez que o estado da requisição mudar.
    //tenta identificar o estado do carregamento do conteúdo
    ajax.onreadystatechange = function() {
        //verifica se o conteúdo já chegou no navegador
        if(ajax.readyState == 4){
            //verifica se o conteúdo já chegou na página
            if(ajax.status == 200){
                //console.log(ajax.responseText);
                resultado = JSON.parse(ajax.responseText);
                console.log(resultado);
                console.log(resultado.name);
                console.log(resultado.main.temp_min);
                console.log(resultado.main.temp_max);
                console.log(resultado.weather[0].description);
                
            }


        }
    }
    }
}
}