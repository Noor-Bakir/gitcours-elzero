$(function() {
    $(".skill-progress span").each(function() {
        $(this).animate({
            'width': $(this).data('width')
        }, 5000)
    })
})