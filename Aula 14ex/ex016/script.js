function contar() {
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando...'
    } 
}