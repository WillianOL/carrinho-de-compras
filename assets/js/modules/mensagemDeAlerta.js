const alertMensage = document.querySelector(".mensagem_de_alerta")
export default function initMensagemDeAlerta(result) {
    if(result){
        alertMensage.classList.remove("alertMensageOn")
    } else {
        alertMensage.classList.add("alertMensageOn")
    }
}