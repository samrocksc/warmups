function stateProducer(type) {
  if(type === 'happy') {
    return actionFactory;
  }
  return inactionFactory;
}

function actionFactory() {
  return new Happiness();
}

function inactionFactory() {
  return new Sadness();
}

class Happiness {
  info() {
    return 'happiness';
  }
}

class Sadness {
  info() {
    return 'sadness';
  }
}

export stateProducer;

