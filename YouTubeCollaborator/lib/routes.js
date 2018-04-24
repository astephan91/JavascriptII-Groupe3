FlowRouter.route('/', {
    name:'home',
    action: function(){
        BlazeLayout.render('Layout', {top: "trueHeader", main: 'LoginModal'});
    }
});

FlowRouter.route('/main', {
    name:'main',
    action: function(){
        BlazeLayout.render('Layout', {top: "trueHeader", main: 'TemplateOri'});
    }
});

FlowRouter.route('/room', {
    name:'room',
    action: function(){
        BlazeLayout.render('Layout', {top: "trueHeader", main: 'roomtemplate'});
    }
});

FlowRouter.route( '/test', {
    action: function() {
      console.log( "Test" );
    },
    name: 'test' // Optional route name.
  });