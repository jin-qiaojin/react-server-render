import about from '../containers/about'
import home from '../containers/home'
import todos from '../containers/todos'
const Routers = [{
    path: '/',
    component: home,
    exact: true
}, {
    path: '/about',
    component: about,
    exact: true
}, {
    path: '/todos',
    component: todos,
    exact: true
}]
    // return (
    //     <Switch>
    //         <Route exact path='/' component={home}/>
    //         <Route exact path='/about' component={about}/>
    //         <Route exact path='/todos' component={todos}/>
    //     </Switch>
    // );

export default Routers;