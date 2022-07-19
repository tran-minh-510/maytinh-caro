var abc=false;
document.write('<div class="container">')
for(i=0;i<100;i++){  
    document.write('<div class="square">')
    document.write('</div>')
}
document.write('</div>')
var square = document.querySelectorAll('.square')
for(a=0;a<square.length;a++){
    square[a].addEventListener('click',function(){
        if(this.children.length !== 0 ){
            alert("Bạn đã chọn ô này")
        }else if(this.children.length === 0 ){
            if(abc===false){
                var createDiv = document.createElement("div")
                createDiv.className = "x"
                this.appendChild(createDiv)
                this.appendChild(createDiv).classList.add('appear')
                createDiv.innerText = "x"
                abc=true
            }else{
                var createDiv = document.createElement("div")
                createDiv.className = "o"
                this.appendChild(createDiv)
                this.appendChild(createDiv).classList.add('appear')
                createDiv.innerText = "o"
                abc=false
            }
        }
    })
}