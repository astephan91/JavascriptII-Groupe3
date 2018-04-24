FlowRouter.route('/', {
    name:'home',
    action: function(){
        BlazeLayout.render('Layout', {top: "trueHeader", main: 'LoginModal'});
    }
});

FlowRouter.route( '/test', {
    action: function() {
      console.log( "Test" );
    },
    name: 'test' // Optional route name.
  });