const btn = document.querySelector('.getTitleBtn'); 

btn.addEventListener('click', async () => {  
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); 
    var p = document.createElement('p') ;
    p.innerHTML="Title is : " + tab.title ;
    document.getElementById("title").appendChild(p) ; 
}); 
