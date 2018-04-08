// es6 class and prototype with string literals

class Team {
  constructor(school, mascot) {
    this.school = school;
    this.mascot = mascot;
  }

  announce() {
    console.log(`Welcome to the ${this.mascot} from ${this.school}`);
  }
}

const jayhawks = new Team('Kansas University', 'Jayhawks');

jayhawks.announce();
