document.getElementById('pesquisar').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value;
    alert('Você procurou por: ' + query);
    // Aqui você pode adicionar a lógica de pesquisa
});

document.querySelector('.dropdown').addEventListener('click', function() {
    this.querySelector('.box-dropdown').classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.querySelectorAll('.box-dropdown');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
};
