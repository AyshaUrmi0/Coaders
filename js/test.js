document.getElementById('add-button').addEventListener('click',function(){
    const value= document.getElementById('input-text').value;
    const container= document.getElementById('parent-container');
    const li=document.createElement('li');
    li.innerText= value;
    li.classList.add('new-class');

    container.appendChild(li);

    const allList=document.getElementsByClassName('new-class');
    for (const item of allList) {
        
    item.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target);

    })
    }  
    
});
document.getElementById('hitButton').addEventListener('click',function(){


    setInnerText("P1","Patience and Perseverance");
    setInnerText("P2","Continuous Learning");
    setInnerText("P3","Collaborate and Seek Feedback");
    setInnerText("P4","Choose Your Path");

    
 const inputValue= getInputValue("input-text");
    console.log(inputValue);


});

function setInnerText(id,value){
    document.getElementById(id).innerText=value;

}

function getInputValue(id){
    const value= document.getElementById(id).value;
    return value;


}

 



