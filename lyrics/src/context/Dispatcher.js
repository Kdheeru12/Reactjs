export default (state, action) => {
    switch(action.type) {
      case 'SEARCH':
        console.log(action.payload);
      
      default:
        return action.payload;
    }
  }