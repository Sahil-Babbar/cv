    var count=0;
    let nv=function(){
       
        count++;
        if(count%2!=0){
        console.log("clicked");
        // document.getElementById('menu').style.backgroundColor="#2e3440";
        document.getElementById('nav').style.width="100%";
        document.getElementById('nav').style.height="auto";
        }
        else{
            document.getElementById('menu').style.backgroundColor="transparent";
            document.getElementById('nav').style.width="0";
        document.getElementById('nav').style.height="0";
        }
    }
    // document.getElementsByClassName("nav").style.width="20vw";
    // document.getElementsByClassName("nav").style.height="100%";