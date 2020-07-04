const likesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      if (state.includes(action.id)) {
        return state.filter(item => item !== action.id);
      } else {
        return [...state, action.id];
      }
    case "LOAD_LIKES":
      return action.newLikes;
    default:
      return state;
  }
};

export { likesReducer };
