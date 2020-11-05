/////////////Exercise 1/////////////
$('#button').on('click', function () {
    const value = $('#name').val();
    const nameVal = "<p id=pName>" + value + "</p>"
    $('body').append(nameVal)
  })

/////////////Exercise 2/////////////
$("body").on("click", "#pName", function() {
    $(this).remove()
  });

/////////////Exercise 4/////////////
