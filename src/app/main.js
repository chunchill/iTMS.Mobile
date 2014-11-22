require.config({
    paths: {
        'jquery': '../vendor/jquery/dist/jquery',
        'underscore': '../vendor/underscore/underscore',
        'knockout': '../vendor/knockoutjs/dist/knockout'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'knockout': {
            exports: 'ko'
        }
    }
});
