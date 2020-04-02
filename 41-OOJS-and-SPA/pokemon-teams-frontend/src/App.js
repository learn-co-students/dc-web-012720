class App {
  constructor(trainers){
    //Problem: trainers is an array of trainer OBJECTS
    //Goal: trainers is an array of trainer INSTANCES
    let instances = trainers.map(trainerObject => new Trainer(trainerObject))
    this.trainers = instances
  }

  render(){
    return `
    <header>
      <h2>Pokemon Teams!</h2>
    </header>
    <main>
      ${this.trainers.map(trainer => trainer.render()).join("")}
    </main>
    `
  }
}
