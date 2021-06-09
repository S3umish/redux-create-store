//let state;

//****Redux works by having an action dispatched, 
//** ...which calls a reducer, and then renders the view. 
//**...Our createStore's dispatch method does that.
//CreateStore method_ is a generic method which makes call to dispatch should call a reducer, reassign the state, and render a change.

function createStore(reducer){
  let state;
  //state is now accessible to dispatch
  //closure=> dispatch function has access to variable: state defined with in the parent function scope
  function dispatch(action){
    state = reducer(state, action);
    render();
  };
  function getState() {
    return state;
  }

  return { 
    dispatch,
    getState 
  }

}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore() // createStore takes the reducer as an argument
  store.dispatch({ type: '@@INIT' })

let button = document.getElementById('button');
button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
