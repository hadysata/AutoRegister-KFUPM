document.addEventListener('DOMContentLoaded', documentEvents  , false);

var term ;
var c = 0

function myAction(input) { 
if (c == 1){
        term = input.value;
           }else if(c>1){
                  window.open("https://banner9-registration.kfupm.edu.sa/StudentRegistrationSsb/ssb/term/termSelection?mode=registration#cr=" + term + "&tr=" + input.value);    
 
           }
    
    
}

function documentEvents() {    
  document.getElementById('ok_btn').addEventListener('click', 
    function() {
      myAction(document.getElementById('term'));
            myAction(document.getElementById('crns'));
                c++;
  });
}