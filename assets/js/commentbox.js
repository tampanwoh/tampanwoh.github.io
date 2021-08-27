var namefield = document.querySelector('#name');
var commentfield = document.querySelector('#fillComment');
var cancel = document.getElementById('cancelButton');
var btn = document.querySelector('.btn')

namefield.onfocus = function() {
    btn.style.display = 'block'
}

commentfield.onfocus = function() {
    btn.style.display = 'block'
}

cancel.onclick = function() {
    btn.style.display = 'none';
    namefield.value = '';
    commentfield.value = ''
}