
function getListNum () {
    let length = document.getElementsByTagName('li').length;
    let getPageNum = Math.ceil(length/10);
    return getPageNum;

}


function addpagebtns(){

    let defaulthtml = "";
    for(x=1; x < getListNum()+1 ;x++){
        defaulthtml = defaulthtml + "<button class = 'btns' type='button' id = page"+x+" "+"onclick =loadpage(" + x+ ")"
        
        +">" +x+"</button>";
    }

    document.getElementsByClassName("btn")[0].innerHTML = defaulthtml;
}

addpagebtns();



function loadpage(x){

let startpoint = x*10-10 ;
let endpoint = x*10-1;
let list = document.getElementsByTagName('li');
for(a=0;a< list.length; a++ ){

    if(a<startpoint){
        list[a].style.display= "none";
    }
    else if (a> endpoint){
        list[a].style.display= "none"; 
    }

    else {list[a].style.removeProperty('display'); }
}

    







}




