
    const RCEPMap = {
        "澳大利亚": true,
        "文莱": true,
        "柬埔寨": true,
        "中国": true,
        "印度尼西亚": true,
        "日本": true,
        "老挝": true,
        "马来西亚": true,
        "缅甸": true,
        "新西兰": true,
        "菲律宾": true,
        "新加坡": true,
        "韩国": true,
        "泰国": true,
        "越南": true,
    };

    const categoryRCEPMap = {
    "除鱼肝油以外的鱼油、脂及其分离物": 0.096,
    "冻牛肉整头及半头": 0.225,
    "冻牛肉带骨头": 0.108,
    "冻牛肉去骨头": 0.108,
    "冻的整头及半头羔羊": 0.12,
    "冻藏的整头及半头绵羊肉": 0.207,
    "冻藏的其他带骨绵羊肉": 0.098,
    "鲜或冷藏、冻藏的山羊肉": 0.18,
    "其他冻牛杂碎": 0.098,
    "其他冻猪杂碎": 0.098,
    "冻猪肝": 0.175,
    "整个或切块的其他动物的胃": 0.175,
    "其他冻鲨鱼翅": 0,
    "其他芝麻": 0.082,
    "其他鲜或冷的猪肉": 0.14,
    "其他冻藏猪肉": 0,
    "未炼制或用其他方法提取的不带瘦肉的肥猪肉、猪脂肪，鲜、冷、冻、干、熏、盐腌或盐渍的": 0.18,
    "干、熏、盐腌或盐渍其他带骨猪肉块": 0.213,
    "其他干、熏、盐腌或盐渍猪肉": 0.213
    };
    const categoryTaxMap = {
    "除鱼肝油以外的鱼油、脂及其分离物": 0.12,
    "冻牛肉整头及半头": 0.25,
    "冻牛肉带骨头": 0.12,
    "冻牛肉去骨头": 0.12,
    "冻的整头及半头羔羊": 0.15,
    "冻藏的整头及半头绵羊肉": 0.23,
    "冻藏的其他带骨绵羊肉": 0.12,
    "鲜或冷藏、冻藏的山羊肉": 0.20,
    "其他冻牛杂碎": 0.12,
    "其他冻猪杂碎": 0.12,
    "冻猪肝": 0.20,
    "整个或切块的其他动物的胃": 0.20,
    "其他冻鲨鱼翅": 0.12,
    "其他芝麻": 0.10,
    "其他鲜或冷的猪肉": 0.20,
    "其他冻藏猪肉": 0.12,
    "未炼制或用其他方法提取的不带瘦肉的肥猪肉、猪脂肪，鲜、冷、冻、干、熏、盐腌或盐渍的": 0.20,
    "干、熏、盐腌或盐渍其他带骨猪肉块": 0.25,
    "其他干、熏、盐腌或盐渍猪肉": 0.25
};

const categoryCountryTaxMap = {
        "除鱼肝油以外的鱼油、脂及其分离物": {
            "冰岛": 0,
            "挪威": 0.06,
            "澳大利亚": 0,
            "英国": 0.06,
            "美国": 0.26,
            "马来西亚": 0,
            "德国": 0.06,
            "葡萄牙": 0.06,
            "印度": 0.12,
            "加拿大": 0.12,
            "新西兰": 0.12
        },
        "冻牛肉整头及半头": {
            "新西兰": 0,
            "澳大利亚": 0
        },
        "冻牛肉带骨头": {
            "乌拉圭": 0,
            "阿根廷": 0,
            "新西兰": 0,
            "澳大利亚": 0,
            "美国": 0.42,
            "白俄罗斯": 0.12,
            "智利": 0,
            "哥斯达黎加": 0,
            "俄罗斯": 0.12,
            "巴拿马": 0.12,
            "纳米比亚": 0.12,
            "塞尔维亚": 0.12,
            "匈牙利": 0.12,
            "南非": 0.12,
            "拉脱维亚": 0.12
        },
        "冻牛肉去骨头": {
            "巴西": 0,
            "阿根廷": 0,
            "澳大利亚": 0,
            "乌拉圭": 0,
            "新西兰": 0,
            "美国": 0.42,
            "玻利维亚": 0.12,
            "白俄罗斯": 0.12,
            "俄罗斯": 0.12,
            "乌克兰": 0.12,
            "哥斯达黎加": 0,
            "智利": 0,
            "爱尔兰": 0.12,
            "巴拿马": 0.12,
            "纳米比亚": 0.12,
            "南非": 0.12,
            "匈牙利": 0.12,
            "法国": 0.12,
            "塞尔维亚": 0.12,
            "哈萨克斯坦": 0.12,
            "荷兰": 0.12
        },
        "冻的整头及半头羔羊": {
            "乌拉圭": 0,
            "澳大利亚": 0,
            "新西兰": 0,
            "智利": 0
        },
        "冻藏的整头及半头绵羊肉": {
            "新西兰": 0,
            "澳大利亚": 0,
            "乌拉圭": 0.23,
            "智利": 0
        },
        "冻藏的其他带骨绵羊肉": {
            "新西兰": 0,
            "澳大利亚": 0,
            "乌拉圭": 0.12,
            "智利": 0,
            "阿根廷": 0.12
        },
        "鲜或冷藏、冻藏的山羊肉": {
            "澳大利亚": 0,
            "新西兰": 0
        },
        "其他冻牛杂碎": {
            "乌拉圭": 0.12,
            "美国": 0.42,
            "新西兰": 0,
            "澳大利亚": 0,
            "俄罗斯": 0.12,
            "哥斯达黎加": 0
        },
        "其他冻猪杂碎": {
            "美国": 0.67,
            "西班牙": 0.12,
            "荷兰": 0.12,
            "丹麦": 0.12,
            "加拿大": 0.12,
            "法国": 0.12,
            "英国": 0.12,
            "智利": 0,
            "爱尔兰": 0.12,
            "巴西": 0.12,
            "芬兰": 0.12,
            "瑞士": 0.12,
            "葡萄牙": 0.12,
            "墨西哥": 0.12
        },
        "冻猪肝": {
            "智利": 0,
            "法国": 0.20
        },
        "整个或切块的其他动物的胃": {
            "美国": 0.50,
            "新西兰": 0,
            "丹麦": 0.20,
            "加拿大": 0.20
        },
        "其他冻鲨鱼翅": {
            "新加坡": 0,
            "西班牙": 0.12,
            "葡萄牙": 0.12
        },
        "其他芝麻": {
            "尼日尔": 0,
            "巴基斯坦": 0,
            "坦桑尼亚": 0,
            "苏丹": 0,
            "多哥": 0,
            "莫桑比克": 0,
            "缅甸": 0,
            "埃塞俄比亚": 0,
            "马里": 0,
            "印度": 0.10,
            "布基纳法索": 0.10,
            "孟加拉国": 0.10,
            "乌干达": 0,
            "塞内加尔": 0,
            "尼日利亚": 0.10,
            "玻利维亚": 0.10,
            "冈比亚": 0,
            "越南": 0,
            "肯尼亚": 0
        },
        "其他鲜或冷的猪肉": {
            "加拿大": 0.20,
            "西班牙": 0.20
        },
        "其他冻藏猪肉": {
            "巴西": 0.12,
            "西班牙": 0.12,
            "丹麦": 0.12,
            "荷兰": 0.12,
            "加拿大": 0.12,
            "美国": 0.67,
            "法国": 0.12,
            "智利": 0,
            "英国": 0.12,
            "爱尔兰": 0.12,
            "奥地利": 0.12,
            "芬兰": 0.12,
            "墨西哥": 0.12,
            "葡萄牙": 0.12,
            "瑞士": 0.12,
            "阿根廷": 0.12
        },
        "未炼制或用其他方法提取的不带瘦肉的肥猪肉、猪脂肪，鲜、冷、冻、干、熏、盐腌或盐渍的": {
            "丹麦": 0.20,
            "法国": 0.20,
            "荷兰": 0.20,
            "葡萄牙": 0.20,
            "西班牙": 0.20,
            "芬兰": 0.20,
            "巴西": 0.20,
            "智利": 0,
            "加拿大": 0.20
        },
        "干、熏、盐腌或盐渍其他带骨猪肉块": {
            "西班牙": 0.25
        },
        "其他干、熏、盐腌或盐渍猪肉": {
            "西班牙": 0.25,
            "美国": 0.55,
            "法国": 0.25
        }
    };

    function round(value, precision = 2) {
        return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
    }

    function getTax(inputs, port) {
        let tax = {
            VATRate: 0.09,
            ImportRate: 0,
            IncomeTaxRate: 0,
            TransRate: 0,
        };

        if (port === "Dalu") {
            tax.ImportRate = getImportTax(inputs);
            tax.IncomeTaxRate = 0.20;
            tax.TransRate = 0.09;
        } else if (port === "Hainan") {
            tax.ImportRate = 0;
            tax.IncomeTaxRate = 0.15;
        }

        return tax;
    }

    function getImportTax(inputs) {
        if (RCEPMap[inputs.country]) {
            return categoryRCEPMap[inputs.category] || 0;
        }

        if (categoryCountryTaxMap[inputs.category] && categoryCountryTaxMap[inputs.category][inputs.country]) {
            return categoryCountryTaxMap[inputs.category][inputs.country];
        }
        if (categoryTaxMap[inputs.category]) {
            return categoryTaxMap[inputs.category];
        }

        return 0;
    }

    function getDaLuOutputs(inputs) {
        const tax = getTax(inputs, "Dalu");

        const importTariff = round(inputs.costOfMaterials * tax.ImportRate);
        const importVAT = round(inputs.costOfMaterials * (1 + tax.ImportRate) * tax.VATRate);
        const productCost = round(inputs.costOfMaterials * 0.1);
        const transCost = round((inputs.finishedProductPrice - inputs.costOfMaterials - importTariff) * tax.TransRate);
        const finishedProductPriceWithTax = round(inputs.finishedProductPrice * 1.09);
        const incomeTax = round((finishedProductPriceWithTax - inputs.costOfMaterials - importTariff - importVAT - productCost - transCost) * tax.IncomeTaxRate);

        const profit = round(finishedProductPriceWithTax - inputs.costOfMaterials - importTariff - importVAT - productCost - transCost - incomeTax);

        return {
            costOfMaterials: inputs.costOfMaterials,
            importTariff: importTariff,
            importVAT: importVAT,
            productCost: productCost,
            transCost: transCost,
            finishedProductPrice: inputs.finishedProductPrice,
            finishedProductPriceWithTax: finishedProductPriceWithTax,
            incomeTax: incomeTax,
            profit: profit,
        };
    }

    function getHainanOutputs(inputs) {
        const tax = getTax(inputs, "Hainan");

        const importTariff = 0;
        const importVAT = round(inputs.costOfMaterials * (1 + tax.ImportRate) * tax.VATRate);
        const productCost = round(inputs.costOfMaterials * 0.1);
        const transCost = 0;
        const finishedProductPriceWithTax = round(inputs.finishedProductPrice * 1.09);
        const incomeTax = round((finishedProductPriceWithTax - inputs.costOfMaterials - importTariff - importVAT - productCost - transCost) * tax.IncomeTaxRate);

        const profit = round(finishedProductPriceWithTax - inputs.costOfMaterials - importTariff - importVAT - productCost - transCost - incomeTax);

        return {
            costOfMaterials: inputs.costOfMaterials,
            importTariff: importTariff,
            importVAT: importVAT,
            productCost: productCost,
            transCost: transCost,
            finishedProductPrice: inputs.finishedProductPrice,
            finishedProductPriceWithTax: finishedProductPriceWithTax,
            incomeTax: incomeTax,
            profit: profit,
        };
    }

    function diff(inputs) {
        const daluOutputs = getDaLuOutputs(inputs);
        const hainanOutputs = getHainanOutputs(inputs);

        return {
            Dalu: daluOutputs,
            Hainan: hainanOutputs,
        };
    }