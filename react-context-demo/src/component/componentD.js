import React, { PureComponent } from 'react';
import { UserConsumer } from './userContext';
class ComponentD extends PureComponent {
    render() {
        return (
            <UserConsumer >
                {
                    (userName) => {
                       return <div>Assalomu aleykum, {userName}!</div>
                    }
                }
            </UserConsumer>

        );
    }
}

export default ComponentD; 