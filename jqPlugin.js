

// $.fn.greenify = function () {
// // 固定寫法建立一個greenify的FUNCTION到.fn
//     this.css("color", "green")
// }
// 如果沒有新增return this的話，一次只能接一個.
// 所有的a變綠色


// 1.建立一個basic後增加return使之可chaning(鏈結)多個action 
// $.fn.greenify = function () {
//     this.css("color", "green")
//     console.log(this)
//     return this
// }
// // $("a").greenify().css("color", "blue");
// $("a").greenify();
// $("h1").greenify();


// 2.建立scope
// (function ($) {
//     // 裡面包東西
// }(jQuery));

(function ($) {

    var shade = "#556b2f";

    $.fn.greenify = function () {
        this.css("color", shade);
        console.log(this)
        return this;

    };

}(jQuery));

