function classProducer(type) {
  if (type === 'classOne') {
    return FactoryOne;
  }
  return FactoryTwo;
}

function factoryOne() {
  return new ClassOne;
}

function factoryTwo() {
  return new ClassTwo;
}

class ClassOne {
  classFunc() {
    return 'Class One';
  }
}

class ClassTwo {
  classFunc() {
    return 'Class Two';
  }
}

module.exports = { classProducer };


