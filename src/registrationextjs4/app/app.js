Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Registration',
    autoCreateViewport: true
});


Ext.onReady(function() {
    Ext.QuickTips.init();
});