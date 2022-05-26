document.getElementById('button').addEventListener('click', load)


function load(){

    const xhr=new XMLHttpRequest();
    xhr.open('GET','plain.txt',true);
    
    xhr.onprogress=function(){
        
    }

    xhr.onload=function (){
           if(this.status===200){
               document.getElementById('output').innerHTML=`<h2>${this.responseText}</h2>`
           }
    }

    xhr.onerror=function (){
        console.log('error is found');
    }


    xhr.send();

}

// 0: request is not intialized;
// 1: server connection is established;
// 2: request is revieved
// 3: request is Processing
// 4: response id ready

