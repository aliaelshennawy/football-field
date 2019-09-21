import players from './players';
const App = {
  init() {
    players.init();
  }
};

export default App;

document.addEventListener('DOMContentLoaded', App.init());
