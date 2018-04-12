import 'flexboxgrid';
import './styles/styles.scss';

var freeBox = document.querySelectorAll('.free');
var chosen = document.querySelector('.chosenOne');


chosen.addEventListener('click', function () {
  alert('THE CHOSEN ONE');
});
