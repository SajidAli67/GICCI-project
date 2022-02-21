$(document).ready(function(){
    $('#aside-show').click(function(){
        $('#aside_bar').addClass('show-aside')
        console.log('...')
    })
    $('#aside-close').click(function(){
        $('#aside_bar').removeClass('show-aside')
    })
});


  $(document).ready(function () {
            var current_fs, next_fs, previous_fs; //fieldsets
            var opacity;
            $(".next").click(function () {
                current_fs = $(this).parent().parent();
                 next_fs = $(this).parent().parent().next();
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active-progress");
                next_fs.show();
                current_fs.animate({ opacity: 0 }, {
                    step: function (now) {
                        opacity = 1 - now;
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({ 'opacity': opacity });
                    },
                    duration: 600
                });
            });
        })

//preview img
    var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };