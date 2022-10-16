// 客户列表
const currencyList = ['美元', '澳元', '泰铢', '欧元']
// 汇率
const rateList = { 
  '美元': 0.144881,
  '澳元': 0.216258,
  '泰铢': 5.3383,
  '欧元': 0.143649
}

// 实际开发中，上述两个数据都是动态从后端获得的
const rateKeys = Object.keys(rateList)
// 策略容器
const strategy = {}

// 为每种汇率添加一个key，并赋值为一个计算对应价格的方法
rateKeys.forEach((item) => {
  // 传入 RMB 价格作为基数
  strategy[item] = (RMPPrice) => {
    return RMPPrice * rateList[item]
  }
})

function getAbroadPrice(RMBPrice = 100, target = '美元') {
  console.log('目标价格是>>>>>', strategy[target](RMBPrice).toFixed(2));
  return strategy[target](RMBPrice).toFixed(2)
}

getAbroadPrice(100, '美元') // 14.481...
