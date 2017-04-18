/*menu.js*/
$svjq( document ).ready(function() {

    $svjq('.menuwrapper').on("click", ".load-ul", function(e) {
        e.preventDefault();
        var me = $svjq(this);
        var myid = me.closest("li").data("myid");
       
        // Hanterar plus och minus-ikon
        if(me.find('i').hasClass('fa-minus')) {
            me.find('i').removeClass('fa-minus').addClass('fa-plus');
            me.attr('aria-label', 'Öppna undermenyn');
        }
        else if(me.find('i').hasClass('fa-plus')) {
            me.find('i').addClass('fa-minus').removeClass('fa-plus');
            me.attr('aria-label', 'Stäng undermenyn');
        }
         me.parent().find('>ul').slideToggle('fast', function() {
        }
    });
});