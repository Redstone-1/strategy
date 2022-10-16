// 状态 （弱光、强光、关灯）
class State {
  constructor(state) {
    this.state = state
  }
  handle(context) {
    console.log(`this is ${this.state} light`)
    context.setState(this.state)
  }
}
class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}
// test 
let context = new Context()
let weak = new State('weak')
let strong = new State('strong')
let off = new State('off')

// 弱光
weak.handle(context)
console.log(context.getState())

// 强光
strong.handle(context)
console.log(context.getState())

// 关闭
off.handle(context)
console.log(context.getState())