export default class SwapiService {
    _apiUrl = 'https://swapi.co/api/';
    _apiPeople = 'people/'
    _apiVehicles = 'vehicles/'
    _apiPlanets ='planets/'

    getData = async (url) => {
        const result = await fetch(this._apiUrl + url);
        return result;
    }

    getAllPeople = async () => {
        const result = await this.getData(this._apiPeople);
        return result.json();
    }

    getAllVehicles = async () => {
        const result = await this.getData(this._apiVehicles);
        return result.json();
    }

    getAllPlanets = async () => {
        const result = await this.getData(this._apiPlanets);
        return result.json();
    }
}


