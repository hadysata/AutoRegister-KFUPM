var CRNs = ["12345", "67890" , "..."] ;
var Term = 191 ;





var pathname = window.location.pathname;

  
if (pathname.indexOf("term") >= 0){
    
   

var t = document.getElementById('txt_term');
                 t.setAttribute('listofsearchterms', "20" + Term + "0");
           document.getElementById('term-go').click();

}


if (pathname.indexOf("classRegistration") >= 0){




    document.getElementById('txt_crn1').value = CRNs[0];


    for (i = 1; i < CRNs.length; i++) { 
             document.getElementById('addAnotherCRN').click();
             document.getElementById('txt_crn' + (i + 1) ).value = CRNs[i];

}
    
 document.getElementById('addCRNbutton').click();
 //wait 600 ms
      window.setTimeout(sv,600);

 
 }

function sv() {
  document.getElementById('saveButton').click();


}


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}