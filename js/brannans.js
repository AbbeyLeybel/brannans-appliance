if (window.matchMedia("(min-width: 768px)").matches) {
    $(function() {
   document.getElementById('btn-about').click();
    });
}
$('input.btn:radio').on('click', function() {
   $('input.btn:radio:not(:checked)').parent().removeClass('btn-active');
    $('input.btn:radio:checked').parent().addClass('btn-active');
    var radio_value = $(this).val();
    if (radio_value == 'about') {
        $('article.about').removeClass('hide');
        $('li.menu-content.about').addClass('visible-xs');
        $('article.contact').addClass('hide');
        $('li.menu-content.contact').removeClass('visible-xs');
        $('article.service-area').addClass('hide');
        $('li.menu-content.service-area').removeClass('visible-xs');
        $('article.brands-appliances').addClass('hide');
        $('li.menu-content.brands-appliances').removeClass('visible-xs');
    } else if (radio_value == 'contact') {
        $('article.about').addClass('hide');
        $('li.menu-content.about').removeClass('visible-xs');
        $('article.contact').removeClass('hide');
        $('li.menu-content.contact').addClass('visible-xs');
        $('article.service-area').addClass('hide');
        $('li.menu-content.service-area').removeClass('visible-xs');
        $('article.brands-appliances').addClass('hide');
        $('li.menu-content.brands-appliances').removeClass('visible-xs');
    } else if (radio_value == 'service-area') {
        $('article.about').addClass('hide');
        $('li.menu-content.about').removeClass('visible-xs');
        $('article.contact').addClass('hide');
        $('li.menu-content.contact').removeClass('visible-xs');
        $('article.service-area').removeClass('hide');
        $('li.menu-content.service-area').addClass('visible-xs');
        $('article.brands-appliances').addClass('hide');
        $('li.menu-content.brands-appliances').removeClass('visible-xs');
    } else if (radio_value == 'brands-appliances') {
        $('article.about').addClass('hide');
        $('li.menu-content.about').removeClass('visible-xs');
        $('article.contact').addClass('hide');
        $('li.menu-content.contact').removeClass('visible-xs');
        $('article.service-area').addClass('hide');
        $('li.menu-content.service-area').removeClass('visible-xs');
        $('article.brands-appliances').removeClass('hide');
        $('li.menu-content.brands-appliances').addClass('visible-xs');
    }
});
$('.to-contact').on('click', function(e) {
    document.getElementById('btn-contact').click();
    e.preventDefault();
});
$('.to-contact-footer').on('click', function() {
   document.getElementById('btn-contact').click();
});