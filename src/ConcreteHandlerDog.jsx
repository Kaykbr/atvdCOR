// ConcreteHandlerDog.jsx
import Handler from "./Handler";

class ConcreteHandlerDog extends Handler {
  handleAnimal(animal) {
    if (animal === "Dog") {
      console.log("Handler de Cachorro lidou com o animal.");
    } else {
      super.handleAnimal(animal);
    }
  }
}

export default ConcreteHandlerDog;
