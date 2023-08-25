//登录
var accountNumTab = document.getElementById("accountNumTab");
var saomiaoTab = document.getElementById("saomaTab");
var accountNumContent = document.getElementById("accountNum-content");
var saomiaoContent = document.getElementById("saomiao-content");
var erweima = document.getElementById("erweima");
var phone = document.getElementById("phone");
accountNumTab.onclick = function(){
    saomiaoContent.style.display= "none";
    accountNumContent.style.display="block";
};
             
saomiaoTab.onclick=function(){
   accountNumContent.style.display="none";
    saomiaoContent.style.display="block";
};
erweima.onmouseover = function(){
    erweima.style.marginLeft = "0px";
    phone.style.display = "block";
}
phone.onmouseover = function(){
    erweima.style.marginLeft = "0px";
    phone.style.display = "block";
}
erweima.onmouseout= function(){
    erweima.style.marginLeft = "75px";
    phone.style.display="none";
}
phone.onmouseout= function(){
    erweima.style.marginLeft = "75px";
    phone.style.display="none";
}

