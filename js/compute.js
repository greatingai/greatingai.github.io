$(document).ready(function() {
	var queryParams = new URLSearchParams(window.location.search);
	var category = queryParams.get('category');
    var country = queryParams.get('country');
	var costOfMaterials = queryParams.get('costOfMaterials');
	var finishedProductPrice = queryParams.get('finishedProductPrice');
	
	inputs = {
		category: category,
		country: country,
		costOfMaterials: costOfMaterials,
		finishedProductPrice: finishedProductPrice
	}
	const results = diff(inputs);
	console.log(results)

	    // 填充表格数据
		$('.enterprise-table tbody tr').eq(0).find('td').eq(1).text(results.Dalu.costOfMaterials); // 原材料成本
		$('.enterprise-table tbody tr').eq(1).find('td').eq(1).text(results.Dalu.importTariff); // 原材料进口关税
		$('.enterprise-table tbody tr').eq(2).find('td').eq(1).text(results.Dalu.importVAT); // 原材料进口增值税
		// $('.enterprise-table tbody tr').eq(3).find('td').eq(1).text(results.Dalu.transCost); // 流转增值税
		$('.enterprise-table tbody tr').eq(3).find('td').eq(1).text(results.Dalu.productCost); // 生产成本
		$('.enterprise-table tbody tr').eq(4).find('td').eq(1).text(results.Dalu.finishedProductPrice); // 销售价格
		$('.enterprise-table tbody tr').eq(5).find('td').eq(1).text(results.Dalu.finishedProductPriceWithTax); // 消端含税价格
		$('.enterprise-table tbody tr').eq(6).find('td').eq(1).text(results.Dalu.incomeTax); // 企业所得税
		$('.enterprise-table tbody tr').eq(7).find('td').eq(1).text(results.Dalu.profit); // 企业利润
		$('.enterprise-table tbody tr').eq(8).find('td').eq(1).text((results.Dalu.profit / results.Dalu.finishedProductPrice * 100).toFixed(2) + '%'); // 企业利润率
	
		$('.enterprise-table tbody tr').eq(0).find('td').eq(2).text(results.Hainan.costOfMaterials); // 原材料成本
		$('.enterprise-table tbody tr').eq(1).find('td').eq(2).text(results.Hainan.importTariff); // 原材料进口关税
		$('.enterprise-table tbody tr').eq(2).find('td').eq(2).text(results.Hainan.importVAT); // 原材料进口增值税
		// $('.enterprise-table tbody tr').eq(3).find('td').eq(2).text(results.Hainan.transCost); // 流转增值税
		$('.enterprise-table tbody tr').eq(3).find('td').eq(2).text(results.Hainan.productCost); // 生产成本
		$('.enterprise-table tbody tr').eq(4).find('td').eq(2).text(results.Hainan.finishedProductPrice); // 销售价格
		$('.enterprise-table tbody tr').eq(5).find('td').eq(2).text(results.Hainan.finishedProductPriceWithTax); // 消端含税价格
		$('.enterprise-table tbody tr').eq(6).find('td').eq(2).text(results.Hainan.incomeTax); // 企业所得税
		$('.enterprise-table tbody tr').eq(7).find('td').eq(2).text(results.Hainan.profit); // 企业利润
		$('.enterprise-table tbody tr').eq(8).find('td').eq(2).text((results.Hainan.profit / results.Dalu.finishedProductPrice * 100).toFixed(2) + '%'); // 企业利润率
	

		$('#profit_rate_dalu').text((results.Dalu.profit / results.Dalu.finishedProductPrice * 100).toFixed(2) + '%'); // 内地企业利润率
   		 $('#profit_rate_hainan').text((results.Hainan.profit / results.Hainan.finishedProductPrice * 100).toFixed(2) + '%'); // 海南企业利润率

	
	$('#reset_button').click(function() {
		window.location.href = 'calculator.html?';
	});
});