let boxes = document.querySelectorAll('.box');
let area1 = document.querySelectorAll('#container1');
let area2 = document.querySelectorAll('#container2');
let area3 = document.querySelectorAll('#container3');
boxes.forEach(box => {
    box.dragstart() = function () {
        if(box.id === 'box1' || box.id === 'box2' || box.id === 'box3' || box.id === 'box4') {]
            area1.ondragover() = function (event) {
            event.preventDefault();
            }
           area1.ondrop() = function (event) {
            event.preventDefault();
            area1.appendChild(box);
           }
        }

    }});

