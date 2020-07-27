$.ajax({
    url: "http:/localhost/w/website/findGoodsTypeList",
    type: "get",
    success: function (data) {
        data.data.forEach(function (atem, index) {
            $(".ejdh").append(`
            <a>${atem.name}</a>
            `)
            $(".ejdh>a").click(function () {
                location.href = "./cpfy.html?text=" + $(this).html();
            })
        })
    }
})
var ong = location.search;
ong = ong.split("=")[1];
ong = decodeURIComponent(ong);
$(".h44").html(ong);
$.ajax({
    url: "http://localhost/w/website/findGoodsList?info=" + ong,
    type: "get",
    success: function (data) {
        data.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (atem, index) {
            $(".nrzs1").html(
                $(".nrzs1").html() +
                `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a class="text text1" href="./cpxqy.html?yousb=${atem.item_id}" style="text-decoration: none;">
                        <img src="${atem.pict_url}" alt="">
                        <span class="yj">${atem.zk_final_price}￥</span>
                        <del class="xj">${atem.reserve_price}￥</del>
                        <p>${atem.short_title}</p>
                        <div class="ljnr">
                            <span class="ljzx" href="${atem.item_url}">立即购买</span>
                            <span class="dp" href="">${atem.shop_title}</span>
                        </div>
                    </a>
                </div>
                    `
            )
        })
    }
})

// 分页页面
var index = 1;
$(".yemeify>span").click(function () {
    $(".nrzs1").empty();
    $(".yemeify>span").css({
        background:"#fff",
        color:"#666"
    })
    $(this).css({
        background:"#d6004d",
        color:"#fff"
    })
    index = $(this).index();
    $.ajax({
        url: "http://localhost/w/website/findGoodsList?info=" + ong+"&pageNo="+index,
        type: "get",
        success: function (data) {

            data.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (atem, index) {
                
                $(".nrzs1").html(
                    $(".nrzs1").html() +
                    `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                    <a class="text text1" href="./cpxqy.html?yousb=${atem.item_id}" style="text-decoration: none;>
                        <img src="${atem.pict_url}" alt="">
                        <span class="yj">${atem.zk_final_price}￥</span>
                        <del class="xj">${atem.reserve_price}￥</del>
                        <p>${atem.short_title}</p>
                        <div class="ljnr">
                            <span class="ljzx" href="${atem.item_url}">立即购买</span>
                            <span class="dp" href="">${atem.shop_title}</span>
                        </div>
                    </a>
                </div>
                        `
                )
            })
        }
    })
})
$(".yemeify>samp").click(function () {
    if ($(this).index()==0){
        $(".yemeify>span").css({
            background:"#fff",
            color:"#666"
        })
        $($(".yemeify>span")[index]).css({
            background:"#d6004d",
            color:"#fff"
        })
        index = index - 1;
        if (index < 1){
            index=1
        }
        $(".nrzs1").empty();
        $.ajax({
            url: "http://localhost/w/website/findGoodsList?info=" + ong+"&pageNo="+index,
            type: "get",
            success: function (data) {
    
                data.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (atem, index) {
                    
                    $(".nrzs1").html(
                        $(".nrzs1").html() +
                        `
                        <div class="col-lg-3 col-md-4 col-sm-6">
                        <a class="text text1" href="./cpxqy.html?yousb=${atem.item_id}" style="text-decoration: none;>
                            <img src="${atem.pict_url}" alt="">
                            <span class="yj">${atem.zk_final_price}￥</span>
                            <del class="xj">${atem.reserve_price}￥</del>
                            <p>${atem.short_title}</p>
                            <div class="ljnr">
                                <span class="ljzx" href="${atem.item_url}">立即购买</span>
                                <span class="dp" href="">${atem.shop_title}</span>
                            </div>
                        </a>
                    </div>
                            `
                    )
                })
            }
        })
    }else{
        $(".yemeify>span").css({
            background:"#fff",
            color:"#666"
        })
        $($(".yemeify>span")[index]).css({
            background:"#d6004d",
            color:"#fff"
        })
        index = index + 1;
        if (index>5){
            index=5
        }
        $(".nrzs1").empty();
        $.ajax({
            url: "http://localhost/w/website/findGoodsList?info=" + ong+"&pageNo="+index,
            type: "get",
            success: function (data) {
    
                data.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (atem, index) {
                    
                    $(".nrzs1").html(
                        $(".nrzs1").html() +
                        `
                        <div class="col-lg-3 col-md-4 col-sm-6">
                        <a class="text text1" href="./cpxqy.html?yousb=${atem.item_id}" style="text-decoration: none;>
                            <img src="${atem.pict_url}" alt="">
                            <span class="yj">${atem.zk_final_price}￥</span>
                            <del class="xj">${atem.reserve_price}￥</del>
                            <p>${atem.short_title}</p>
                            <div class="ljnr">
                                <span class="ljzx" href="${atem.item_url}">立即购买</span>
                                <span class="dp" href="">${atem.shop_title}</span>
                            </div>
                        </a>
                    </div>
                            `
                    )
                })
            }
        })

    }
})