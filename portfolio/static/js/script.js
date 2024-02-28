var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

// sidemenu
var sidemenu=document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right='0'
}
function closemenu(){
    sidemenu.style.right='-200px'
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbz_fIqUO_plTc2QxNlrGMQqgbIdSsJo7otZtAfhkJ311e8NlMNRr3z1kbJ6mrrjYvBd3g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML='Successfully Sent Message'
            setTimeout(function(){
                msg.innerHTML=''
            },5000)
        form.reset()})
      .catch(error => console.error('Error!', error.message))
  })

  const totop=document.querySelector('.to-top');

  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
        totop.classList.add('active')
    }
    else{
        totop.classList.remove('active');;
    }
  })


var modal=document.getElementById('modal');



closebtn=document.getElementById('modal-close');
closebtn.addEventListener('click',function(){
    modal.style.display='none'
})

var frame=document.getElementById('frame');

function openmodal(names){
    
    if (names==='intern'){
        frame.src='{% static "images/Internship_certificate.pdf" %}';
        modal.style.display='block';
    }
    else if(names==='intern-git'){
        document.getElementById(names).href='https://github.com/mohsink-11/HR_SALARY_PREDICTION_DASHBOARD';
    }
    else if(names==='intern-demo'){
        document.getElementById(names).href='https://youtu.be/d8wC93CdgUw?si=xLQYZuA8sGgwEOTJ'
    }

    else if (names==='campus'){
        frame.src="{% static 'images/campus-certificate.pdf' %}";
        modal.style.display='block';
    }
    else if(names==='campus-git'){
        document.getElementById(names).href='https://github.com/mohsink-11/Identifying-patterns-and-trends-in-campus-placement-data-analysis-using-machine-learning';
    }
    else if(names==='campus-demo'){ 
        document.getElementById(names).href='https://youtu.be/g0swpc0Enmc?si=O2s68ZxPHHJW01KN'
    } 
    else if(names==='wifi-demo'){ 
        frame.src='images/wifi-demo.mp4';
        modal.style.display='block';
    }   
}