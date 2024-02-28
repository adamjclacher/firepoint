const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navBarLinks = document.getElementsByClassName('navBarLinks')[0]

var question = document.getElementsByClassName('faq');
var i;
var len = question.length;



for(i=0; i<len; i++){
  question[i].addEventListener('click', function(){
    var answer = this.nextElementSibling;
    if(answer.style.display == 'block') {
      answer.style.display = 'none';
    } else{
      answer.style.display = 'block';
    }
  })
}


toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
  toggleButton.classList.toggle('clicked')
})
