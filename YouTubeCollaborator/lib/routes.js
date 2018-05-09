 if (Meteor.isClient) {
 Accounts.onLogin(function() {
        FlowRouter.go('main');
    });

    Accounts.onLogout(function() {
        FlowRouter.go('logout');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('login2');
}
}]);

FlowRouter.route('/', {
    name:'home',
    action: function(){
        if(Meteor.userId()) {
            FlowRouter.go('main');
        }
        BlazeLayout.render('Layout', {top: "headerHome", main: 'hometemplate'});
    }
});



FlowRouter.route('/login', {
    name:'login',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerLogin", main: 'LoginModal'});
    }
});

FlowRouter.route('/login2', {
    name:'login2',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerLogin", main: 'login2'});
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

  
  FlowRouter.route('/parametre', {
    name:'parametre',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerLogin", main: 'LoginModal'});
    }
});

FlowRouter.route('/search', {
    name:'search',
    action: function(){
        BlazeLayout.render('Layout', {top: "headerLogin", main: 'searchtemplate'});
    }
});