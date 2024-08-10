const listaSelecaoChampions = document.querySelectorAll('.champion')
const championsCard = document.querySelectorAll('.cartao-lol')

listaSelecaoChampions.forEach(champion => {
    champion.addEventListener('click', () => {
        
        const cartaoChampionAberto = document.querySelector('.aberto')
        cartaoChampionAberto.classList.remove('aberto')

        const idChampionSelecionado = champion.attributes.id.value

        const cartaoChampionParaAbrir = document.getElementById('cartao-' + idChampionSelecionado)

        cartaoChampionParaAbrir.classList.add('aberto')

        const championAtivoNaListagem = document.querySelector('.ativo')
        championAtivoNaListagem.classList.remove('ativo')

        const  championSelecionadoNaListagem = document.getElementById(idChampionSelecionado)
        championSelecionadoNaListagem.classList.add('ativo')
    })
})