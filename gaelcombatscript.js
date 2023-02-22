$(document).ready(function () {
    
    $(`.gltab`).click(function () {
        var tab_g = $(this).attr("data-type");
        $(`.glbox`).hide();
        $(`.glbox[data-type="${tab_g}"]`).show();

        $(`.gltab`).removeClass('gaeltab-open');
        $(this).addClass('gaeltab-open')
    })

    $(`.gael-combat`).each(function () {
        var g_hp = Number($(`.gaelcombat-hpcurrent`).text());
        var g_hp2 = Number($(`.gaelcombat-hptotal`).text());
        var g_percent = g_hp / g_hp2 * 100;
        $(`.gaelcombat-hpbar`).css("width",`${g_percent}%`)
    })

});
