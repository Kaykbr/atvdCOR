// ConcreteHandlerCat.jsx
import Handler from "./Handler";

class ConcreteHandlerCat extends Handler {
  handleAnimal(animal) {
    if (animal === "Cat") {
      console.log("Handler de Gato lidou com o animal.");
    } else {
      super.handleAnimal(animal);
    }
  }
}

export default ConcreteHandlerCat;
