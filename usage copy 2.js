{/* <div class="banner">
	<a class="wrap" href="#">
		<img class="img" src="./imgs/1200x380.png" title="輸入廣告促銷說明文字" alt="輸入廣告促銷說明文字">
	</a>
</div> */}

(function ($) {
	'use strict';
	var ModuleName = 'banner';

	var Module = function (ele, options) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
	};

	Module.DEFAULTS = {
		style: 'classname',
		whenClickCallback: function () {
			console.log('whenClickCallback');
		}
	};

	Module.prototype.toggle = function () {
		console.log('999');
	}; xx

	Module.prototype.open = function () {
		console.log('888');
	};

	Module.prototype.close = function () {
		console.log('333777W');
	};

	$.fn[ModuleName] = function (methods, options) {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(ModuleName);
			console.log(!!module)
			var opts = null;
			if (!!module) {
				if (typeof methods === 'string' && typeof options === 'undefined') {
					module[methods]();
				} else if (typeof methods === 'string' && typeof options === 'object') {
					module[methods](options);
				} else {
					console.log('unsupported options!');
					throw 'unsupported options!';
				}
			} else {
				opts = $.extend({}, Module.DEFAULTS, (typeof methods === 'object' && options), (typeof options === 'object' && options));
				module = new Module(this, opts);
				$this.data(ModuleName, module);
				console.log($this.data(ModuleName));
			}
		});
	};



})(jQuery);


$(function () {
	$('.banner').banner({
		// 以下總共會有這些狀態

		// 設定一開始是否為開或合
		openAtStart: true, // [boolean] true | false
		// 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
		autoToggle: true, // [boolean|number] true | false | 3000

		// 上面如果是預設關閉狀態那就要自動打開

		// 設定收合展開按鈕
		button: {
			closeText: '收合', // [string]
			openText: '展開', // [string]
			class: 'btn' // [string]
		},
		// 設定模組在各狀態時的class
		class: {
			closed: 'closed', // [string]
			closing: 'closing', // [string]
			opened: 'opened', // [string]
			opening: 'opening' // [string]
		},
		// 是否要有transition效果
		transition: true,
		// 當有transition時，要執行的callback function
		// 這個要執行30次
		whenTransition: function () {
			console.log('whenTransition');
			// setinterval 
			// clearInterval
		}
	});

	$('.banner').banner('toggle');

	$('.banner').banner('open');

	$('.banner').banner('close');
})