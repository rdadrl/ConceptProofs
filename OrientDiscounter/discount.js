(function (percentage) {
	var prices = document.getElementsByClassName("woocommerce-Price-amount");
	for (var i = 0; i < prices.length; i++) {
		if (prices[i].parentElement.nodeName != "DEL") { //if not already discounted
			var price = Number(Math.round(parseInt(prices[i].textContent.split("$")[1].replace(',','')) * ((100 - percentage) / 100)+'e'+2)+'e-'+2);
			prices[i].innerHTML = '<span class="woocommerce-Price-currencySymbol">$</span>' + price;
		}
		else {
			prices[i].remove();
		}
	}
	return "Orient discount (" + percentage + "%) applied";
})(30);

