// 首页轮播图渲染
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

// 首页9.9包邮数据渲染
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

// 首页19.9包邮数据渲染
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
// 首页特惠商品数据渲染
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
// 导航内容
$.ajax({
    url: "http:/localhost/w/website/findGoodsTypeList",
    type:"get",
    success: function (data) {
        data.data.forEach(function(atem,index){
            $(".ejdh").append(`
            <a>${atem.name}</a>
            `)
            $(".ejdh>a").click(function(){
                location.href = "./cpfy.html?text="+$(this).html();    
            })
        })
    }
})
// 用户登录表单验证
var denglu1s = false;
var denglu2s = false;
var mimas2 = false;
var youxiangs = false;
var shoujis = false;

var denglu1 = $(".denglu1")
var reg = /^[a-zA-Z0-9_-]{6,16}$/;
denglu1.blur(function () {
    if ($(this).val() == "") {
        $(this).next().html("用户名不能为空！")
        $(this).next().css("color", "red")
        denglu1s = false;
    } else if (reg.test($(this).val())) {
        $(this).next().html("用户名可用")
        $(this).next().css("color", "green")
        denglu1s = true;
    } else {
        $(this).next().html("用户名格式错误！")
        $(this).next().css("color", "red")
        denglu1s = false;
    }
})

var mima1 = $(".mima1")
mima1.blur(function () {
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    if ($(this).val() == "") {
        $(this).next().html("密码不能为空！")
        $(this).next().css("color", "red")
        mima1s = false;
    } else if (reg.test($(this).val())) {
        $(this).next().html("密码可用")
        $(this).next().css("color", "green")
        mima1s = true;
    } else {
        $(this).next().html("密码格式错误！")
        $(this).next().css("color", "red")
        mima1s = false;
    }
})


// 注册表单验证
var denglu2 = $(".denglu2")
denglu2.blur(function () {
    var reg = /^[a-zA-Z0-9_-]{6,16}$/;
    if ($(this).val() == "") {
        $(this).next().html("用户名不能为空！")
        $(this).next().css("color", "red")
        denglu2s = false;
    } else if (reg.test($(this).val())) {
        $(this).next().html("用户名可用")
        $(this).next().css("color", "green")
        denglu2s = true;
    } else {
        $(this).next().html("用户名格式错误！")
        $(this).next().css("color", "red")
        denglu2s = false;
    }
})
var mima2 = $(".mima2")
mima2.blur(function () {
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    if ($(this).val() == "") {
        $(this).next().html("密码不能为空！")
        $(this).next().css("color", "red")
        mima2s = false;
    } else if (reg.test($(this).val())) {
        $(this).next().html("密码可用")
        $(this).next().css("color", "green")
        mima2s = true;
    } else {
        $(this).next().html("密码格式错误！")
        $(this).next().css("color", "red")
        mima2s = false;
    }
})
var youxiang = $(".youxiang")
youxiang.blur(function () {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if ($(this).val() == "") {
        $(this).next().html("邮箱不能为空！")
        $(this).next().css("color", "red")
        youxiangs = false;
    } else if (reg.test($(this).val())) {
        $(this).next().html("邮箱可用")
        $(this).next().css("color", "green")
        youxiangs = true;
    } else {
        $(this).next().html("邮箱格式错误！")
        $(this).next().css("color", "red")
        youxiangs = false;
    }
})
var shouji = $(".shouji")
shouji.blur(function () {
    var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    if ($(this).val() == "") {
        $(this).next().html("手机号不能为空！")
        $(this).next().css("color", "red")
        shoujis = false;
    } else if (reg.test($(this).val())) {
        $(this).next().html("手机号可用")
        $(this).next().css("color", "green")
        shoujis = true;
    } else {
        $(this).next().html("手机号格式错误！")
        $(this).next().css("color", "red")
        shoujis = false;
    }
})

// 注册上传
$(".zhucefs").click(function () {
    if (denglu2s && mima2s && youxiangs && shoujis && yzs2) {
        $.ajax({
            url: "http://192.168.1.103:3000/users/register",
            type: "post",
            data: {
                username: denglu2.val(),
                password: mima2.val(),
                phone: shouji.val(),
                email: youxiang.val()
            },
            success: function (data1) {
                console.log(data1)
                if (data1.state == 0) {
                    alert('注册成功!');
                    location.href = "./用户登录.html";
                } else {
                    alert('用户名已存在!');
                }
            }
        })
    } else {
        alert('输入格式错误!');
    }

})

// 登录上传
$(".denglufs").click(function () {
    if (denglu1s && mima1s && yzs1) {
        $.ajax({
            url: "http://192.168.1.103:3000/users/login",
            type: "post",
            data: {
                username: denglu1.val(),
                password: mima1.val(),
            },
            success: function (data1) {

                if (data1.state == 0) {
                    alert('登录成功!');
                    $.ajax({
                        url: "http://192.168.1.103:3000/users/userinfo",
                        type: "get",
                        data: {
                            username: denglu1.val(),
                            token: data1.token
                        },
                        success: function (data2) {
                            localStorage.setItem("userinfo", JSON.stringify(data2.userinfo));
                            location.href = "./index.html";
                            if (data2.state == 0) {
                            } else {
                            }
                        }
                    })

                } else {
                    alert('用户名或密码错误!');
                }
            }
        })
    } else {
        alert('输入格式错误!');
    }
})





