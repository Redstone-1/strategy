/**
 * 发布者
 */
class Publisher {
  constructor() {
    this.observers = []
  }
  /**
   * 添加订阅者
   * @param {t} observer 
   */
  add(observer) {
    this.observers.push(observer)
  }

  /**
   * 移除订阅者
   */
  remove(observer) {
    this.observers = this.observers.filter(ob => {
      return ob.id !== observer.id
    })
  }

  /**
   * 通知所有订阅者
   */
  notify() {
    this.observers.forEach(ob => ob.update(this))
  }
}

/**
 * 订阅者
 */

class Observer {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }

  update(publisher) {
    console.log('publisher>>>>>', publisher);
  }
}

/**
 * 模拟微信群
 */

class WechatGroupPublisher extends Publisher {
  constructor() {
    super()
    this.observers = []
    this.groupMessages = []
  }

  add = (observer) => {
    observer.addMessage = this.addMessage
    observer.getMessages = this.getMessages
    this.observers.push(observer)
  }

  addMessage = (msg) => {
    this.groupMessages.push(msg)
  }

  getMessages = () => {
    console.log('this.groupMessages>>>>>', this.groupMessages);
    return this.groupMessages
  }
}

class WechatGroupObserver extends Observer {
  constructor() {
    super()
  }
  update = (group) => {
    group.getMessages()
  }
}

const group = new WechatGroupPublisher();
const lilei = new WechatGroupObserver('lilei', '男')
const zhangsan = new WechatGroupObserver('zhangsan', '男')

group.add(lilei)
group.add(zhangsan)

lilei.addMessage('我进群啦！')
zhangsan.addMessage('我也进群啦！')

// lilei.getMessages()

group.notify()