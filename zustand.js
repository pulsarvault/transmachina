// Zustand Learning Day 1 for Samir

const createStore = (initializer) => {

  let state = initializer;

  return { // keep return and { on same line or JS will do automatic semicolon insertion
    get: () => state.score, // Arrow function implicit return
    set: (c) => { state.score += c } // Explicit block, returns undefined
  }

}

const myStore = createStore({ name: "Rohit", score: 0 });
console.log('State: ', myStore.get());

myStore.set(82);
console.log('New Score: ', myStore.get());
