var sb1 = JSON.parse(localStorage.getItem("guccp"));
sb1.forEach(function (atem, index) {
    $(".tr1").after(
        `
    <tr class="tr2 tr3">
    <td><input class="onesel" type="checkbox" name="sex"></td>
    <td><img src="${atem.img}" alt=""></td>
    <td><a href="./cpxqy.html?yousb=${atem.id}">${atem.name}</a></td>
    <td>${atem.price}</td>
    <td>
        <a class="a2 zuo">-</a>
        <a class="a1 a2">${atem.sl}</a>
        <a class="a2 you">+</a>
    </td>
    <td class = "zje">${atem.price}</td>
    <td class = "shanc">删除</td>
    </tr>
    `)
});
$(".zuo").click(function () {
    if (+$(this).next().html() > 1) {
        var sl = +$(this).next().html()
        $(this).next().html(sl - 1);
        var zje = +$(this).parent().prev().html();
        $(this).parent().next().html(zje * (sl-1))
    }
})
$(".you").click(function () {
    if (+$(this).prev().html() < 5) {
        var sl = +$(this).prev().html()
        $(this).prev().html(sl + 1);
        var zje = +$(this).parent().prev().html();
        $(this).parent().next().html(zje * (sl+1))
    }
})
$(".shanc").click(function(){
  var index18 = $(this).closest("tr").index()-1
   sb1.splice(index18,1)
   localStorage.setItem("guccp",JSON.stringify(sb1))
   $(this).closest("tr").remove()
})

$(".allsel").click(function(){
    if($(this).prop("checked") == true){
        $(".onesel").prop("checked",true);
    }
    else{
        $(".onesel").removeProp("checked");
        
    }
    var sum = 0;
    $(".onesel").each(function(index,atem){
       if($(this).prop("checked")){
       sum += +$(this).closest("tr").find(".zje").html();
       }
    })
    $(".loy").html(sum+"￥")
})
$(".onesel").click(function(){
    var sum = 0;
    $(".onesel").each(function(index,atem){
       if($(this).prop("checked")){
       sum += +$(this).closest("tr").find(".zje").html();
       }
    })
    $(".loy").html(sum+"￥")
})