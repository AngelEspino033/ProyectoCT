function openPage(pageName,elmnt){
    var i,tabcontent,tablinks;
    tabcontent=document.getElementsByClassName("conte");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].Style.display="none";
    }
    document.getElementById(pageName).style.display="block";
}
doocument.getElementById("ho").click()