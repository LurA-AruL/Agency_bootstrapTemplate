// read more function
function clickread(btnvalue,dot,ree){
    console.log(btnvalue,dot,ree);

        var dots = document.getElementById(dot);
        let readmore = document.getElementById(ree);
        let btnstart = document.getElementById(btnvalue);
        console.log(btnstart);
    if(dots.style.display === "none")
    { 
        dots.style.display = "inline";
        btnstart.innerHTML = "LEARN MORE";
        readmore.style.display = "none";
    } else {
        dots.style.display = "none";
        btnstart.innerHTML = "LEARN LESS";
        readmore.style.display = "inline";
        console.log(btnstart.innerHTML);
    }
                         }

//slider function
var count = 1;
function slide(a,b){
    
    console.log(a)
    let gx = document.getElementById(b);
    let slideplus = a; 
    if(slideplus == a ){
        console.log(slideplus,a,b);
       count += gx.style.zIndex = 7;
        gx.style.opacity = 1;
    }
    console.log(count);

}
function slidenagative(a,b){
    console.log(a)
    let g = document.getElementById(b);
    let slideplus = a;
    console.log(slideplus,a);
    if(slideplus == a ){
        console.log(slideplus,a);
       count += g.style.zIndex = 6;
        g.style.opacity = 1;
    }
    console.log(count);
    

}
function iconj(a,b){
    let btn = document.querySelector('#'+a);
if (btn) {
        btn.addEventListener('mouseover', () => {
            let icontitle = document.getElementById(b);
          icontitle.style.display = 'block';
          icontitle.style.fontSize = '5pt';
        });
        btn.addEventListener('mouseout', () => {
            let icontitle = document.getElementById(b);
          icontitle.style.display = 'none';
        });
  }

}
// 

// submit btn

// function submitbtn(){
//     let textvalue = document.getElementById('textvalue').value;
//     let emailvalue = document.getElementById('email').value; 
//     let txtarvalue = document.getElementById('txtarea').value;
//     console.log(textvalue,emailvalue,txtarvalue);
// }
