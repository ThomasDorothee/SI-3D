var freeBox = document.querySelectorAll('.free');
var box = document.querySelectorAll('.box');

// selection d'une box libre = la box devient bleu
for (let i = 0; i < freeBox.length; i++) {
  freeBox[i].addEventListener('click',function(){
    free(i);
  })
}
// modal si le stand est déjà reservé ou non
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click',function(){
    reserved(i);
  })
}

function free(index){
  for (var y = 0; y < freeBox.length; y++) {
    if(index !== y){
      freeBox[y].classList.remove('click');
    }
    freeBox[index].classList.add('click');
  }
}

function reserved(index){
  if(box[index].classList.contains('free')){
    alert('Le stand ' + (index+1) +" est maintenant réservé");
  }
  else if (box[index].classList.contains('close')){
    alert("Ce Stand est déjà réservé");
  }
}

//Scroll;
