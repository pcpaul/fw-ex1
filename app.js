Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            items: [
                {
                    title: 'Home',
                    iconCls: 'back',
                    html: 'Welcome'
                }
            ]
        });
    }
});