// define feedback text
var defaultText = "Copy"
var feedbackText = '✓ Copied'


// get target elements
var clipboardTriggers = document.querySelectorAll('[data-clipboard-text]');

// attach clipboard.js
new ClipboardJS(clipboardTriggers);

// attach feedback functionality
clipboardTriggers.forEach(item => {
    item.addEventListener('click', event => {
        // initialize jQuery element object
        var element = $(event.currentTarget);
      
        // set feedback text
        element.attr('title', feedbackText);
        element.attr('data-original-title', feedbackText);
        element.tooltip('update');
        element.tooltip('show');
    
        // set default text
        element.on('hide.bs.tooltip', function () {
            element.attr('title', defaultText);
            element.attr('data-original-title', defaultText);
        })
    })
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
