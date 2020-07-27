var ong1 = location.search;
ong1 = ong1.split("=")[1];
$.ajax({
    url: "http://localhost/w/website/findGoodsDetail?info=" + ong1,
    type:"get",
    success:function(data){
        data.data.detail.tbk_item_info_get_response.results.n_tbk_item.forEach(function(atem,index){
            $(".xqy1").append(
                `
            <div class="div1 fl" >
                <img class="dtp" src="${atem.small_images.string[0]}" alt="">
                <div class="d1">
                    <img src="${atem.small_images.string[0]}" alt="">
                    <img src="${atem.small_images.string[1]}" alt="">
                    <img src="${atem.small_images.string[2]}" alt="">
                    <img src="${atem.small_images.string[3]}" alt="">
                </div>
            </div>
            <div class="div2 fl">
                <h2>${atem.title}</h2>
                <p>产品名称：<span>${atem.title}</span></p>
                <p>产品类型：<span>${atem.cat_leaf_name}</span></p>
                <p>产品分类：<span>${atem.cat_name}</span></p>
                <p>产　    地：<span>${atem.provcity}</span></p>
                <p>店铺名称：<span>${atem.nick}</span></p>
                <p class="jg">市  场  价：<del>￥${atem.reserve_price}</del></p>
                <p class="jg">现　    价：<samp> ￥${atem.zk_final_price}</samp></p>
                <a class="gman" href="" style="background-color: #ee0055; color:#fff;">立即购买</a>
                <a class="gman gman1" >加入购物车</a>
            </div>
                `
            )
            $(".d1>img").click(function(){
                $(".dtp").attr("src",$(this).attr("src"))
            })
            $(".gman1").click(function(){
                var shuzu = JSON.parse(localStorage.getItem("guccp"))||[];
                var obg1 = {
                    img:atem.small_images.string[0],
                    name:atem.title,
                    price:atem.zk_final_price,
                    id:ong1,
                    sl:1
                }
                shuzu.push(obg1)
                if(localStorage.getItem("userinfo")){
                    localStorage.setItem("guccp",JSON.stringify(shuzu))
                    location.href = "./gcw.html";
                }else{
                    alert('请登录!');
                    location.href = "./用户登录.html";
                }
            })
        })
    }
})