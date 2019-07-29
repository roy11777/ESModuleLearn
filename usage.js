(function($) {
  "use strict";
  // 名稱
  var ModuleName = "banner";
  // 類別
  var Module = function(ele, options) {
    // 該元素
    this.ele = ele;
    this.$ele = $(ele);
	this.options = options;
	console.log(options)
    // 初次進入頁面
    this.openAtStart = true;
    this.autoToggle = true;
    this.button = {
      closeText: "收合", // [string]
      openText: "展開", // [string]
      class: "btn" // [string]
    };
    this.class = {
      closed: "closedee", // [string]
      closing: "closingee", // [string]
      opened: "openedee", // [string]
      opening: "openingee" // [string]
    };
    this.transition = true;
    this.whenTransition = function() {
      //   console.log("whenTransition");
    };
  };
  // 預設
  Module.DEFAULTS = {
    closeText: "收合",
    opened: "opened",

    style: "classname",
    whenClickCallback: function() {
      //   console.log("whenClickCallback");
    }
  };
  // Function
  Module.prototype.toggle = function() {
    console.log("999");
  };

  Module.prototype.open = function() {
    this.ele.text = this.button.closeText;
    this.ele.className = this.class.opened;
    console.log(this);
  };

  Module.prototype.close = function() {
    this.ele.text = this.button.openText;
    this.ele.classList.add(this.class.closed);
    this.ele.classList.remove(this.class.opened);
    this.ele.style.height = "0px";
    console.log(this.ele);
  };

  // 街口
  $.fn[ModuleName] = function(methods, options) {
	  console.log(this)
    return this.each(function() {
      var $this = $(this);
      var module = $this.data(ModuleName);
      console.log($this);
      console.log(module);
      console.log(methods);
      console.log(options);
      var opts = null;
      // 第二次狀態
      if (!!module) {
        if (typeof methods === "string" && typeof options === "undefined") {
		  module[methods]();
		  console.log("NOT1");
        } else if (typeof methods === "string" && typeof options === "object") {
			module[methods](options);
			console.log("NOT2");
        } else {
          // console.log("unsupported options!");
          throw "unsupported options!";
        }
      } else {
        // 第一次狀態
        opts = $.extend(
          {},
          Module.DEFAULTS,
          typeof methods === "object" && options,
          typeof options === "object" && options
        );
        module = new Module(this, opts);
        $this.data(ModuleName, module);
        console.log($this.data(ModuleName));
      }
    });
  };
})(jQuery);
$(".banner").banner({
  // 設定一開始是否為開或合
  openAtStart: true, // [boolean] true | false
  // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
  autoToggle: true, // [boolean|number] true | false | 3000
  // 設定收合展開按鈕顯示名稱
  button: {
    closeText: "收合", // [string]
    openText: "展開", // [string]
    class: "btn" // [string]
  },
  // 設定模組在各狀態時的class
  class: {
    closed: "closed", // [string]
    closing: "closing", // [string]
    opened: "opened", // [string]
    opening: "opening" // [string]
  },
  // 是否要有transition效果
  transition: true,
  // 當有transition時，要執行的callback function
  // tenasitionend 事件
  whenTransition: function() {
    console.log("whenTransition");
  }
});

// 設定好function等待呼叫
// $(function() {
//   $(".banner button").banner("toggle");

//   $(".banner button").banner("open");

//   $(".banner button").banner("close");
// });
