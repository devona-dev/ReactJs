import React, { PureComponent } from 'react';
import ComponentA  from './component/componentA';
import { UserProvider } from './component/userContext';
class App extends PureComponent {
    render() { 
        return ( 
          <UserProvider value="Mamur">
             <ComponentA />
          </UserProvider>
         );
    }
}
 
export default App;