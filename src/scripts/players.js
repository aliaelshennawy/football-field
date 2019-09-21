import $ from 'jquery';
const players = {
  init() {
    this.cacheDom();
    this.getSelectValue();
  },
  cacheDom() {
    var defenders = document.querySelectorAll('.defenders');
    var midfielders = document.querySelectorAll('.midfielders');
    var attackers = document.querySelectorAll('.forwards');
    // console.log(defenders[0].childElementCount);
    // console.log(midfielders[0].childElementCount);
    // console.log(attackers[0].childElementCount);
  },
  getSelectValue() {
    var selectFormation = document.getElementById('select-formation');
    selectFormation.addEventListener('change', event => {
      var selectFormationValue = event.target.value;
      this.drawFormations(selectFormationValue);
    });
  },
  renderUi(defenders, midfielders, attackers) {
    $('.defenders').empty();
    $('.midfielders').empty();
    $('.forwards').empty();
    for (var i = 0; i < defenders; i++) {
      $('.defenders').append(`<div class='playground-player'>
      <button> Player ${i} </button>   
      <p class="player-name"> Add Defender ${i}`);
    }
    for (var i = 0; i < midfielders; i++) {
      $('.midfielders').append(`<div class='playground-player'>
      <button> Player ${i} </button>   
      <p class="player-name"> Add Midfielder`);
    }
    for (var i = 0; i < attackers; i++) {
      $('.forwards').append(`<div class='playground-player'>
      <button> Player ${i} </button>   
      <p class="player-name"> Add Forwards`);
    }
  },
  drawFormations(formation) {
    switch (formation) {
      case '4-4-2':
        this.renderUi(4, 4, 2);
        break;
      case '4-3-3':
        this.renderUi(4, 3, 3);
        break;
      case '5-4-1':
        this.renderUi(5, 4, 1);
        break;
      case '5-3-2':
        this.renderUi(5, 3, 2);
        break;
      case '3-4-3':
        this.renderUi(3, 4, 3);
        break;
      case '3-5-2':
        this.renderUi(3, 5, 2);
        break;
    }
  },
  playerPopup() {}
};

export default players;
