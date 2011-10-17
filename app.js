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
                
                //this is the recent blogs page. It uses a tree store to load its data from blog.json
                {
                    xtype: 'nestedlist',
                    title: 'Blog',
                    iconCls: 'star',
                    cls: 'blog',
                    displayField: 'title',
                    
                    store: Ext.create('Ext.data.TreeStore', {
                        fields: ['title', 'text'],
                        
                        root: {},
                        proxy: {
                            type: 'ajax',
                            url: 'blog.json'
                        }
                    }),
                    
                    //when a leaf node is tapped on this function is called. Whatever we return is shown on the page
                    //here we show a page containing the blog post's text
                    getDetailCard: function(node) {
                        if (node) {
                            return {
                                xtype: 'panel',
                                scrollable: true,
                                html: node.get('text')
                            };
                        }
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
        });
    }
});
