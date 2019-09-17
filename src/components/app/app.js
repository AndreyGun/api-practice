import React from 'react';
import SwapiService from '../../api/swapi-service';

const App = () => {
    const swapiService = new SwapiService();

    swapiService.getAllVehicles().then(dat => console.log(dat));

    return <div>App</div>
}

export default App;