FlowRouter.route('/home', {
    name:'home',
    action: function(){
        BlazeLayout.render('header', {main: 'LoginModal'});
    }
});

FlowRouter.route( '/test', {
    action: function() {
      console.log( "Test" );
    },
    name: 'test' // Optional route name.
  });