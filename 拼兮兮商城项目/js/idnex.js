$.ajax({
    url: "http://localhost/w/website/bannerList",
    type: "get",
    success: function (data) {
        data.data.forEach(function (atem, index) {
            $(".lbt123").html(
                $(".lbt123").html() +
                `<div class="item">
                <img src="${atem.img}" alt="...">
                <div class="carousel-caption">
                </div>
                </div>`
            )
        })
        $($(".lbt123").children()[0]).addClass("active")
    }
})

$.ajax({
    url: "http://localhost/w/website/findGoodsList?info=9.9",
    type: "get",
    success: function (data) {
        data.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (atem, index) {
            if (index < 8) {
                $(".nrzs1").html(
                    $(".nrzs1").html() +
                    `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="text text1">
                        <img src="${atem.pict_url}" alt="">
                        <span class="yj">${atem.zk_final_price}￥</span>
                        <del class="xj">${atem.reserve_price}￥</del>
                        <p>${atem.short_title}</p>
                        <div class="ljnr">
                            <a class="ljzx" href="${atem.item_url}">立即购买</a>
                            <a class="dp" href="">${atem.shop_title}</a>
                        </div>
                    </div>
                </div>
                    `
                )
            }
        })
    }
})
$.ajax({
    url: "http://localhost/w/website/findGoodsList?info=19.9",
    type: "get",
    success: function (data) {
        data.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (atem, index) {
            if (index < 8) {
                $(".nrzs2").html(
                    $(".nrzs2").html() +
                    `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="text text1">
                        <img src="${atem.pict_url}" alt="">
                        <span class="yj">${atem.zk_final_price}￥</span>
                        <del class="xj">${atem.reserve_price}￥</del>
                        <p>${atem.short_title}</p>
                        <div class="ljnr">
                            <a class="ljzx" href="${atem.item_url}">立即购买</a>
                            <a class="dp" href="">${atem.shop_title}</a>
                        </div>
                    </div>
                </div>
                    `
                )
            }
        })
    }
})
$.ajax({
    url: "http://localhost/w/website/findGoodsList?info=特价",
    type: "get",
    success: function (data) {
        data.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (atem, index) {
            if (index < 8) {
                $(".nrzs3").html(
                    $(".nrzs3").html() +
                    `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="text text1">
                        <img src="${atem.pict_url}" alt="">
                        <span class="yj">${atem.zk_final_price}￥</span>
                        <del class="xj">${atem.reserve_price}￥</del>
                        <p>${atem.short_title}</p>
                        <div class="ljnr">
                            <a class="ljzx" href="${atem.item_url}">立即购买</a>
                            <a class="dp" href="">${atem.shop_title}</a>
                        </div>
                    </div>
                </div>
                    `
                )
            }
        })
    }
})