document.querySelectorAll('.topico-nav').forEach(item => {
    item.addEventListener('click', event => {
        const dropdown = item.nextElementSibling;
        
        // Fecha todos os outros dropdowns
        document.querySelectorAll('.box-dropdown').forEach(box => {
            if (box !== dropdown) {
                box.style.display = 'none';
            }
        });

        // Alterna o dropdown clicado
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });
});

// Fechar o dropdown se clicar fora dele
document.addEventListener('click', event => {
    if (!event.target.closest('.container-dropdown')) {
        document.querySelectorAll('.box-dropdown').forEach(box => {
            box.style.display = 'none';
        });
    }
});

// troca de imagens
function changeImage(image) {
    document.getElementById('principal').src = image;
}

function changeColor(image) {
    document.getElementById('principal').src = image;
}