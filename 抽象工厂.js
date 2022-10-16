/**
 * 抽象类，在一个工厂的最顶层
 * 手机厂
 */
class MobilePhoneFactory {
  createOS() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
  createHardware() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
  createSoftware() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
}

/**
 * 具体类，某一个产品的生产线，专一负责某个产品
 * 第一条手机生产线，可能是老人机，可能是智能机
 */
class MobilePhoneFactoryFirst extends MobilePhoneFactory {
  // 生产系统
  createOS() {
    // ...
  }
  // 生产硬件
  createHardware() {
    // ...
  }
  // 生产软件
  createSoftware() {
    // ...
  }
}

// ------------------------------------------------ 

/**
 * 定义系统 OS 抽象类，手机产品线的系统流水线
 */
class OS {
  showUI() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
  controlHardware() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
}

/**
 * 具体类，生产安卓系统
 */
class AndroidOS extends OS {
  showUI() {
    return '展示安卓界面'
  }
  controlHardware() {
    return '控制安卓手机硬件';
  }
}
/**
 * 具体类，生产苹果系统
 */
class AppleOS extends OS {
  showUI() {
    return '展示苹果界面';
  }
  controlHardware() {
    return '控制苹果手机硬件';
  }
}

/**
 * 定义系统 Hardware 抽象类，手机产品线的硬件流水线
 */
class Hardware {
  playMusic() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
  playVideo() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
}

/**
 * 具体类，生产安卓硬件
 */
class AndroidHardware extends Hardware {
  playMusic() {
    return '控制安卓手机，播放音乐';
  }
  playVideo() {
    return '控制安卓手机，播放视频';
  }
}
/**
 * 具体类，生产苹果硬件
 */
class AppleHardware extends Hardware {
  playMusic() {
    return '控制苹果手机，播放音乐';
  }
  playVideo() {
    return '控制苹果手机，播放视频';
  }
}

/**
 * 定义系统 Software 抽象类，手机产品线的软件流水线
 */
class Software {
  createDouyin() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
  createWechat() {
    throw new Error('抽象工厂不允许直接构建实例')
  }
}

/**
 * 具体类，生产安卓 app
 */
class AndroidSoftware extends Software {
  createDouyin() {
    return '开发一个安卓系统的抖音app';
  }
  createWechat() {
    return '开发一个安卓系统的微信app';
  }
}
/**
 * 具体类，生产苹果 app
 */
class AppleSoftware extends Software {
  createDouyin() {
    return '开发一个苹果系统的抖音app';
  }
  createWechat() {
    return '开发一个苹果系统的微信app';
  }
}

// ---------------------------------------

/** 
 * 组装安卓手机生产车间
 */
class AndroidFactory extends MobilePhoneFactory {
  createOS() {
    return new AndroidOS()
  }
  createHardware() {
    return new AndroidHardware()
  }
  createSoftware() {
    return new AndroidSoftware()
  }
}

/** 
 * 组装苹果手机生产车间
 */
 class AppleFactory extends MobilePhoneFactory {
  createOS() {
    return new AppleOS()
  }
  createHardware() {
    return new AppleHardware()
  }
  createSoftware() {
    return new AppleSoftware()
  }
}

// -----------------------------------------
const androidPhone = new AndroidFactory()
console.log(androidPhone.createOS().showUI());
console.log(androidPhone.createOS().controlHardware());
console.log(androidPhone.createHardware().playMusic());
console.log(androidPhone.createHardware().playVideo());
console.log(androidPhone.createSoftware().createDouyin());
console.log(androidPhone.createSoftware().createWechat());

const applePhone = new AppleFactory()
console.log(applePhone.createOS().showUI());
console.log(applePhone.createOS().controlHardware());
console.log(applePhone.createHardware().playMusic());
console.log(applePhone.createHardware().playVideo());
console.log(applePhone.createSoftware().createDouyin());
console.log(applePhone.createSoftware().createWechat());

