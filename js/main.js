
function changeText(){
    document.getElementById("sbid").innerHTML ="this element get by id";
}

function changeText2(){
    document.getElementsByClassName("texttwo")[0].innerHTML ="this element get by class";
}
function wechangeP(){
   
    document.getElementsByTagName("p")[0].style.cssText="border:1px solid black;padding:10px;font-size:30px";
}

//output 
function shoeAlert(){
    alert("using alert ");
}

function shoeAlert02(){
   document.write("this is doucment");
}

function shoeAlert03(){
    window.alert("this is window");
 }

 //imge src
 function imgone(){
     document.getElementById("img01").src="images/cold.jpg";
 }
 function imgtwo(){
    document.getElementById("img01").src="images/coffe.jpg";
}

//src change (light of on)
function lightoff(){
    document.getElementById("loff").src="images/lightoff.gif";
    
}
function lighton(){
    document.getElementById("loff").src="images/lighton.gif";
    
}
//variable use

function usevariable(){
    var addtext ="this is use of add text";
    document.getElementById("vars").innerHTML =addtext;
}




// jQuery start here
$(document).ready(function(){

    $(".jqhide").click(function(){
     $(".box01").hide(1000);
    });
    $(".jqshow").click(function(){
        $(".box01").show(2000);
       });



//for new text show
$('button').click(function(){

    $('#STN').html("Hello, World!");
});

//s01 start
$('#s01').click(function(){

    $('.s01').html('this is s01');
});

//s02 start
$('#s02').click(function(){

    $('.s02').html('this is s02');
});

});



// jQuery end here