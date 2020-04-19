import React from 'react'

import HomeScreen from './screens/home'
import FavoritesScreen from './screens/favorites' 
import AlbumsScreen from './screens/albums'
import DiscoveryScreen from './screens/discovery'
import SearchScreen from './screens/search'
import {Switch , Route} from 'react-router-dom'


const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen}/>
        <Route exact path='/favorites' component={FavoritesScreen}/>
        <Route exact path='/album/:id' component={AlbumsScreen}/>
        <Route exact path='/discovery' component={DiscoveryScreen}/>
        <Route exact path='/search' component={SearchScreen}/>
    </Switch>
);

export default Routes;