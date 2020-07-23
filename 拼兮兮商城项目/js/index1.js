if (localStorage.getItem("userinfo")) {
    $(".zhxx").css("display","none");
    $(".tcdl").css("display","inline-block");
    $(".dlyhm1").html(JSON.parse(localStorage.getItem("userinfo")).username)

}
$(".ycdl1").click(function(){
    localStorage.removeItem("userinfo");
    $(".tcdl").css("display","none");
    $(".zhxx").css("display","inline-block");
}) 


