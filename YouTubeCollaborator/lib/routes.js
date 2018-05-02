FlowRouter.route('/', {
    name:'home',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerHome", main: 'hometemplate'});
    }
});



FlowRouter.route('/login', {
    name:'login',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerLogin", main: 'LoginModal'});
    }
});

FlowRouter.route('/about', {
    name:'about',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerAbout", main: 'abouttemplate'});
    }
});

FlowRouter.route('/main', {
    name:'main',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerHome", main: 'TemplateOri'});
    }
});

FlowRouter.route('/room', {
    name:'room',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerHome", main: 'roomtemplate'});
    }
});

FlowRouter.route( '/test', {
    action: function() {
      console.log( "Test" );
    },
    name: 'test' // Optional route name.
  });

  
