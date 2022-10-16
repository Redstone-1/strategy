function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

function userFactory(name, age, career) {
  let work
  switch (career) {
    case 'coder':
      work = ['写代码', '改bug', '需求评审', '设计评审']
      break;
    case 'PM':
      work = ['订会议室', '确定需求', '催开发进度']
    default:
      break;
  }

  return new User(name, age, career, work)
}

console.log('userFactory>>>>>', userFactory('张三', 22, 'coder'));