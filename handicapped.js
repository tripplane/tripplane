function openList1() {
    var list = document.getElementById("ollist");

    if (list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
}

function fontsize() {
    document.getElementById("container").style.fontSize = "30px";
    document.getElementById("container1").style.fontSize = "30px";
    document.getElementById("container2").style.fontSize = "30px";
    document.getElementById("container3").style.fontSize = "30px";
}
   

        function fontsized() {
         document.getElementById("container").style.fontSize = "20px";
         document.getElementById("container1").style.fontSize = "20px";
         document.getElementById("container2").style.fontSize = "20px";
         document.getElementById("container3").style.fontSize = "20px";
     }
   



    function grey() {
    if(document.getElementById("header1").style.filter == "none")
    {
        document.getElementById("header1").style.filter = "grayscale(100%)";
    }
    else
    {
        document.getElementById("header1").style.filter = "none";
    }
 }



    function contrast()  {
    if(document.getElementById("header1").style.filter == "none")
    {
        document.getElementById("header1").style.filter = "contrast(500%)";
    }
    else
    {
        document.getElementById("header1").style.filter = "none";
    }
 }



    function invert()  {
    if(document.getElementById("header1").style.filter == "none")
    {
        document.getElementById("header1").style.filter = "invert(100%)";
    }
    else
    {
        document.getElementById("header1").style.filter = "none";
    }
 }




    function font()  {
    if(document.getElementById("container").style.fontFamily == "none"){
           document.getElementById("container").style.fontFamily = "Ariel";
           document.getElementById("container1").style.fontFamily = "Ariel";
           document.getElementById("container2").style.fontFamily = "Ariel";
           document.getElementById("container3").style.fontFamily = "Ariel";
    }
    else{
           document.getElementById("container").style.fontFamily = "assistant";
           document.getElementById("container1").style.fontFamily = "assistant";
           document.getElementById("container2").style.fontFamily = "assistant";
           document.getElementById("container3").style.fontFamily = "assistant";
   }

        
 }



 