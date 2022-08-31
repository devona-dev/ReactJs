import React, { PureComponent } from 'react';
import ComponentB from './componentB';

export class ComponentA extends PureComponent {
    render() { 
        return ( 
            <ComponentB />
         );
    }
}
 
export default ComponentA;