// ConcreteHandlerElephant.jsx
import Handler from "./Handler";

class ConcreteHandlerElephant extends Handler {
  handleAnimal(animal) {
    if (animal === "Elephant") {
      console.log("Handler de Elefante lidou com o animal.");
    } else {
      super.handleAnimal(animal);
    }
  }
}

export default ConcreteHandlerElephant;
