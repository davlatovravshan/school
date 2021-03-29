$('.left-card').on('click', function () {
    var list = $(this).siblings('.left-card-list-parent');
    if (!list.hasClass('active')) {
        $('.left-card-list-parent').removeClass('active');
    }
    list.toggleClass('active');
})