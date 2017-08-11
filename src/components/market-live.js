import React  from 'react';
import $ from 'jquery';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getTop10() {
  $.get("https://api.coinmarketcap.com/v1/ticker/?limit=10", function(data, status){
    var tempArray = [];
    tempArray = data;
    console.log('running');

    var str = '<table class="table"><tr><th>Rank</th><th>Name</th><th>Price</th><th>Market Cap</th><th>1 Hour % Change</th></tr>';
    for (var item of tempArray){
      var cap = item.market_cap_usd;
      var capFormat = numberWithCommas(cap);
      str += '<tr>' + '<td>' + item.rank + '</td>' + '<td>' + item.name + ' (' + item.symbol + ')' + '</td>' + '<td>' + item.price_usd + '</td>' + '<td>$' + capFormat + '</td>' + '<td>' + item.percent_change_1h + '% </td>' + '</tr>';
      console.log(item)
    }

    str += '</table>';

  $('.market-container').append(str);


    });
}



const Market = (props) => {
  getTop10();
  return (
    <div className="market">
      <label className="market-title">Your {props.title}</label>
      <div className="market-container">
      </div>
      </div>
  );

}

export default Market;
