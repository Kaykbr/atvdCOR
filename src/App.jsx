// App.jsx
import React, { useEffect } from "react";
import ConcreteHandlerDog from "./ConcreteHandlerDog";
import ConcreteHandlerCat from "./ConcreteHandlerCat";
import ConcreteHandlerElephant from "./ConcreteHandlerElephant";

function App() {
  useEffect(() => {
    // Configurar a cadeia de manipuladores
    const handlerElephant = new ConcreteHandlerElephant();
    const handlerCat = new ConcreteHandlerCat(handlerElephant);
    const handlerDog = new ConcreteHandlerDog(handlerCat);

    // Testar a cadeia de manipuladores
    handlerDog.handleAnimal("Dog");
    handlerDog.handleAnimal("Cat");
    handlerDog.handleAnimal("Elephant");
    handlerDog.handleAnimal("Fish");
  }, []);

  return <div>Verifique o console para ver os resultados.</div>;
}

export default App;
