import React, { PureComponent } from 'react';
import ComponentC from './componentC';
export class ComponentB extends PureComponent {
    render() { 
        return ( 
            <ComponentC />
         );
    }
}
 
export default ComponentB;