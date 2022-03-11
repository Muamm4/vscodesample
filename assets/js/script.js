const buttonExtrator = document.getElementsByClassName('extrato');
console.log(buttonExtrator)

const listaOptions = document.querySelector('.formas_pagamento')

function removeClass() {
    const divRemove = document.querySelectorAll(".transacao .containerForma div")
    console.log(divRemove)
    for (let i = 0; i < divRemove.length; i++) {
        divRemove[i].classList.remove("show")
    }
}

function identOption() {
    const elemento = event.target

    if (elemento.tagName == "LI") {
        const id = elemento.id
        removeClass()
        if (id == 2) {
            const seccaoEscolhaUser = document.querySelector(`div[data-id="${id}"]`)
            const pixdiv = document.querySelectorAll('#pix')
            console.log(pixdiv)
            seccaoEscolhaUser.classList.add('show')
                for (let i = 0; i < pixdiv.length; i++) {
                pixdiv[i].classList.add('show')
                }
        }
        
        else (id != 2) ;
                const seccaoEscolhaUser = document.querySelector(`div[data-id="${id}"]`)
                seccaoEscolhaUser.classList.add('show')
            





        }


    }


    listaOptions.addEventListener('click', identOption);