---
layout: post
title:  "Enable HTML5 placeholder in IE"
date:   2014-04-13
categories: Javascript
---

simply using the function below(not suggested):

```js
(function($){
    var doc = document,
        inputs = doc.getElementsByTagName('input'),
        supportPlaceholder = 'placeholder' in doc.createElement('input');

    $.fn.placeholder = function(){
        return this.each(function(){
            var input = $(this), text = input.attr('placeholder'), password = input.attr('type') === 'password';

            if( text && !supportPlaceholder ){
                if (password) return;
                input.val(text);

                input.focus(function(){
                    if( input.val() === text ){
                        input.val('');
                    }
                });

                input.blur(function(){
                    if( $.trim( input.val() ) === ''){
                        input.val(text);
                    }
                });
            }
        });
    };

    $(function () {
        $('[placeholder]').placeholder();
    });
})(jQuery);
```

see also: <a href="https://github.com/mathiasbynens/jquery-placeholder" target="_blank">jquery-placeholder</a>