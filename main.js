$(function () {
    $(".valueInput").on('keyup blur', function () {
        sessionStorage.setItem('value', $(".valueInput").val());
        console.log('update');
    });
});

$(window).bind('storage', function () {
    alert('storage changed');
});