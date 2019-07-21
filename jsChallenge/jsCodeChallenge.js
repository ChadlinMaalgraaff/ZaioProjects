function blue() {
    var tag = document.getElementById('box-text')
    tag.textContent = "Hi, may name is blue";
    
    var div = document.getElementById('box');
    box.style.backgroundColor = 'blue';
    
    var cal = document.getElementById('calculation');
    cal.innerHTML = calculation('blue');
    
}

function green() {
    var tag = document.getElementById('box-text')
    tag.textContent = "Hi, may name is green";
    
    var div = document.getElementById('box');
    box.style.backgroundColor = 'green';
    
    var cal = document.getElementById('calculation');
    cal.innerHTML = calculation('green');
}

function red() {
    var tag = document.getElementById('box-text')
    tag.textContent = "Hi, may name is red";
    
    var div = document.getElementById('box');
    box.style.backgroundColor = 'red';
    
    var cal = document.getElementById('calculation');
    cal.innerHTML = calculation('red');
}

function calculation(text) {
    var value = 0;
    
    for (i = 0; i < text.length; i++) {
        value += text.charCodeAt(i);
    }
    
    return value;
}