stepsCounter = {
   steps: 0,
   increase() {
      this.steps++;
      return this;
   },
   decrease() {
      this.steps--;
      return this;
   },
   reset() {
      this.steps = 0;
      return this;
   },
   read() {
      console.log(this.steps);
      return this;
   }
};

stepsCounter.increase().increase().increase().read().decrease().read().reset().read();
