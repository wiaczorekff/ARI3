//executa a função anônima depois que toda a página for carregada
window.onload = function() {

    //clicando no botao, chama a função
    document.querySelector("#botao").onclick = function() {
        //criando o objeto ajax dependendo do navegador
       var ajax = null;
        //se no navegador existir o XMLHttpRequest(), ele cria por essa metodologia
       if (window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
        //se no navegar não existir ele usa ActivXObject
    }else if(window.ActiveXObject){
        ajax = new ActiveXObject("Msxml2.XMLHTTP");
    }
    


    //abre a página txt via GET
    ajax.open("GET", "dadosAjax1.txt", true);
    //Como é via GET, não se envia nada
    ajax.send(null);

  

    ajax.onreadystatechange = function() {
        //verifica se o conteúdo já chegou no navegador
        if(ajax.readyState == 4){
            //verifica se o conteúdo já chegou na página
            if(ajax.status == 200){
                //se sim, escrevemos no elemento com id #janela que está no html a resposta do ajax
                document.querySelector("#janela").innerHTML = ajax.responseText;
            }
     

        }
    }
    }
}