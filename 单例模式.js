/**
 * 类实现
 */
class SingleInstance {
  show() {
    console.log('这是一个单例模式');
  }

  static getInstance() {
    if (!SingleInstance.instance) {
      SingleInstance.instance = new SingleInstance()
    }
    return SingleInstance.instance
  }
}

const SI1 = SingleInstance.getInstance()
const SI2 = SingleInstance.getInstance()

console.log('SI1 === SI2>>>>>', SI1 === SI2);

/**
 * 闭包实现
 */
SingleInstance.getInstance = (function() {
  let ins = null;
  return function() {
    if (!ins) {
      ins = new SingleInstance()
    }
    return ins
  }
})()



