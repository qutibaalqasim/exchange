var exchangeForm = document.querySelector('.exchangeForm');

exchangeForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
      if(elements[1].value == 'dollar'){
        var result = elements[0].value * 3.5;
        document.querySelector('.result').innerHTML = result;
      }else if(elements[1].value == 'dinar'){
        var result = elements[0].value * 5;
        document.querySelector('.result').innerHTML = result;
      }else{
        var result = elements[0].value * 1;
        document.querySelector('.result').innerHTML = result;
      }
    }

    




