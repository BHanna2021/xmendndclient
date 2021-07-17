import React from 'react';
import { sidebar, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

// import {
//     Route,
//     Link,
//     Switch
// } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar' id='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list-styling'>
                    <h4>User Name</h4>
                    <h6>other info</h6>
                    <h6>other info</h6>
                </ul>
                <ListGroup className='sidebar_list'>
                    <ListGroupItem active>
                        <ListGroupItemHeading>Character Name</ListGroupItemHeading>
                        <ListGroupItemText>
                            Character Class
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Character Race
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
            {/* <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/FeatureCard'><FeatureCard /></Route>
                    <Route exact path='/ListGroups'><ListGroups /></Route>
                    <Route exact path='/Carousel'><Carousel /></Route>
                    <Route exact path='/Forms'><Forms /></Route>
                </Switch>
            </div> */}
        </div>
    );
};

export default Sidebar;