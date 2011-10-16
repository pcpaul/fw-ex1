Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            tabBarPosition: 'bottom',
            
            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<img src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>You're creating the Getting Started app. This demonstrates how ",
                        "to use tabs, lists and forms to create a simple app</p>",
                        '<h2>Sencha Touch (2.0.0pr1)</h2>'
                    ].join("")
                },
                
                {
                    
                    title: 'Blog',
                    iconCls: 'star',
                    xtype: 'list',
                    
                    itemTpl: '{title}',
                    store: {
                        fields: ['title', 'url'],
                        data: [
                            { title: 'Ext Schedule 2.0', 
                              url: 'ext-scheduler-2-0-upgrading-to-ext-js-4' 
                            },
                            { title: 'Previewing Sench Touch 2', 
                              url: 'sench-touch-2-what-to-expect' 
                            },
                            { title: 'Sencha Con 2011', 
                              url: 'senchacon-2011-now-packed-with-more-goodness' 
                            },
                            { title: 'Documentation in Ext JS 4', 
                              url: 'new-ext-js-4-documentation-center' 
                            }]
                    }
                },
                
                {

                    title: 'Contact',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    
                    url: 'contact.php',
                    layout: 'vbox',
                    
                    items: [
                        {
                            title: 'Contact Us',
                            xtype: 'fieldset',
                            instructions: '(email address is optional)',
                            items:[
                                {
                                    label: 'Name',
                                    xtype: 'textfield'
                                },
                                {
                                    label: 'Email',
                                    xtype: 'emailfield'
                                },
                                {
                                    label: 'Message',
                                    xtype: 'textareafield'
                                }
                                
                            ]
                        
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',
                            handler: function(){
                                this.up('formpanel').submit();
                            }
                        }
                    
                    
                    
                    
                    ]
                    
                        
                    
                    
                
                }
            ]
        }).setActiveItem(2);
    }
});
