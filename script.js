var ja = document.getElementById('ja');
var nej = document.getElementById('nej');
var textarea = document.getElementById('textarea');
var hallbarhetspreferenser = document.querySelector('.text-area-container');



function nejtext() {
    hallbarhetspreferenser.classList.add('hidden');
}

ja.addEventListener('change', nejtext);

