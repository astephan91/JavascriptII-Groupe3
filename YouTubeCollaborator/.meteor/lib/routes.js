FlowRouter.route('/', {
    name:'home',
    action(){
        BlazeLayout.render('header', {main: 'LoginModal'});
    }
});