$(document).ready(function(){
    $('#all').click(function(){
        $('#web-development-work').fadeIn(1000);
        $('#web-design-work').fadeIn(1000);
        $('#graphic-design-work').fadeIn(1000);
        $('#photo-graphy-work').fadeIn(1000);
        $('#seo-work').fadeIn(1000);
        $('#market-work').fadeIn(1000);
    })

    $('#web-development').click(function(){
        $('#web-development-work').fadeIn(1000);
        $('#web-design-work').fadeOut(1000);
        $('#graphic-design-work').fadeOut(1000);
        $('#photo-graphy-work').fadeOut(1000);
        $('#seo-work').fadeOut(1000);
        $('#market-work').fadeOut(1000);
    })

    $('#web-design').click(function(){
        $('#web-development-work').fadeOut(1000);
        $('#web-design-work').fadeIn(1000);
        $('#graphic-design-work').fadeOut(1000);
        $('#photo-graphy-work').fadeOut(1000);
        $('#seo-work').fadeOut(1000);
        $('#market-work').fadeOut(1000);
    })

    $('#graphic-design').click(function(){
        $('#web-development-work').fadeOut(1000);
        $('#web-design-work').fadeOut(1000);
        $('#graphic-design-work').fadeIn(1000);
        $('#photo-graphy-work').fadeOut(1000);
        $('#seo-work').fadeOut(1000);
        $('#market-work').fadeOut(1000);
    })

    $('#photo-graphy').click(function(){
        $('#web-development-work').fadeOut(1000);
        $('#web-design-work').fadeOut(1000);
        $('#graphic-design-work').fadeOut(1000);
        $('#photo-graphy-work').fadeIn(1000);
        $('#seo-work').fadeOut(1000);
        $('#market-work').fadeOut(1000);
    })
    $('#seo').click(function(){
        $('#web-development-work').fadeOut(1000);
        $('#web-design-work').fadeOut(1000);
        $('#graphic-design-work').fadeOut(1000);
        $('#photo-graphy-work').fadeOut(1000);
        $('#seo-work').fadeIn(1000);
        $('#market-work').fadeOut(1000);
    })
    $('#market').click(function(){
        $('#web-development-work').fadeOut(1000);
        $('#web-design-work').fadeOut(1000);
        $('#graphic-design-work').fadeOut(1000);
        $('#photo-graphy-work').fadeOut(1000);
        $('#seo-work').fadeOut(1000);
        $('#market-work').fadeIn(1000);
    })
});