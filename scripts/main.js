const cells = document.querySelectorAll(".cell")
let nextChar = ""

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if(this.textContent !== "") {
            return;
        }
        this.textContent = nextChar
        
        if (nextChar === "X") {
            nextChar = "O"
        } else {
            nextChar = "X"
        }
    });
}