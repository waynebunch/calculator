function final(value) {
  var test = '';
  value.forEach(function(value) {
    test += value;
  });
  var convert = eval(test);
  $('#output').val(convert);
}

var stringInput = (function() {
  var array = [];
  var flag2 = 0;
    $('.myButton').click(function() {
        console.log(flag2);
      if (flag2 === 0){
      array.push($(this).val());
      $('#output').val($('#output').val() + $(this).val());
      } else if (flag2 === 1){
        $('#output').val('');
        array.push($(this).val());
        $('#output').val($('#output').val() + $(this).val());
        flag2 = 0;
      }
    });
                           

  $('.funcButton').click(function() {
    $('#output').val('');
    var flag = 0;
    if (flag === 0) {
      array.push(array.splice(0, 0, '('));
      array.push(array.splice(array.length - 1, 0, ')'));
      array.push($(this).val());
      flag = 1;
    } else {
      array.push($(this).val());
      flag = 0;
    }
  })

  $('.parButton').click(function() {
    $('#output').val('');
    array.push($(this).val());
  })

  $('#clear').click(function() {
    $('#output').val('');
    array = [];
  })

  $('#clearLast').click(function() {
    $('#output').val('');
    array.pop();
  })

  $('#equals').click(function() {
    flag2 = 1;
    final(array);
    array = [];
  })
})();
