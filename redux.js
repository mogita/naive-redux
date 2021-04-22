// the definition for the store
function createStore(reducer) {
  const listners = []
  let currentState = reducer(undefined, {})

  return {
    getState() {
      return currentState
    },
    dispatch(action) {
      currentState = reducer(currentState, action)

      listners.forEach((fn) => fn())
    },
    subscribe(fn) {
      listners.push(fn)

      return {
        unsubscribe() {
          listners = listners.filter((listner) => listner !== fn)
        },
      }
    },
  }
}
