var underscore = require('underscore');

hexo.extend.renderer.register('tpl', 'html', function(data, locals) {
    return underscore.template(data.text, locals);
}, true);
