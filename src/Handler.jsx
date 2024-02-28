// Handler.jsx
class Handler {
    constructor(successor = null) {
      this.successor = successor;
    }
  
    handleAnimal(animal) {
      if (this.successor) {
        this.successor.handleAnimal(animal);
      } else {
        console.log("Não é possível lidar com este animal.");
      }
    }
  }
  
  export default Handler;
  