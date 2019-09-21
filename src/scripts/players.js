import $ from 'jquery';
import jqueryModal from 'jquery-modal';

const players = {
  init() {
    this.cacheDom();
    this.getSelectValue();
    this.getPlayersList();
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
      <a  href="#player-options" class="defender-btn" rel="modal:open"> Player ${i} </a>   
      <p class="player-name"> Add Defender ${i}`);
    }
    for (var i = 0; i < midfielders; i++) {
      $('.midfielders').append(`<div class='playground-player'>
      <a  href="#player-options" class="defender-btn" rel="modal:open"> Player ${i} </a>  
      <p class="player-name"> Add Midfielder`);
    }
    for (var i = 0; i < attackers; i++) {
      $('.forwards').append(`<div class='playground-player'>
      <a  href="#player-options" class="defender-btn" rel="modal:open"> Player ${i} </a>  
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
  getPlayersList() {
    const { playersApi } = window;
    $.ajax({
      url: playersApi,
      method: 'GET',
      success: result => {
        console.log(Object.entries(result));
        var arrayOfDefenders = Object.values(result)[0];
        var arrayOfMidFielders = Object.values(result)[1];
        var arrayOfAttackers = Object.values(result)[2];

        arrayOfDefenders.forEach(arrayItem => {
          $('#player-table').append('<tr><td>' + arrayItem.name + '</td></tr>');
        });
        console.log(result);
      },
      error: err => {
        console.log(err);
      }
    });
  }
};

export default players;
