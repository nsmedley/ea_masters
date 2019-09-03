$(function () {
    $(".valueInput").on('keyup blur', function () {
        localStorage.setItem('value', $(".valueInput").val());
        console.log('update');
    });
});

$(window).bind('storage', function () {
    console.log('storage changed');
    $('.value').val(localStorage.getItem('value'));
});