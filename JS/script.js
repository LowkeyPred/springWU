const button = document.getElementById('toggle_button');
const box = document.getElementById('ordered');
button.addEventListener('click', () => {
    if (box.style.right === "100vw") {
        box.style.right = "0px"; 
    } else {
        box.style.right = "100vw";
    }
}); 