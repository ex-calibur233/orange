$(".dlyhm1").html(JSON.parse(localStorage.getItem("userinfo")).username||"")
if (localStorage.getItem("userinfo") != "") {
    $(".zhxx").css("display","none");
    $(".tcdl").css("display","inline-block");
}
$(".ycdl1").click(function(){
    localStorage.removeItem("userinfo");
    $(".tcdl").css("display","none");
    $(".zhxx").css("display","inline-block");
}) 


