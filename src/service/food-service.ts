export default class FoodService {

    _apiBase = 'https://udayogra-indian-restaurants-menu-v1.p.rapidapi.com';

    getResource = async (url:string) => {
        return await fetch(`${this._apiBase}${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "34a85d5cc3msh79696487e0da4f6p17eeddjsnb89a09cfe2ff",
                "x-rapidapi-host": "udayogra-indian-restaurants-menu-v1.p.rapidapi.com"
            }})
            .then((res) => {
                return res.json()
            })   
            .catch(err => console.log(err))  
    }

    getProductsList = async() => {
        const res = await this.getResource('/dl?city=lviv');
        console.log(res);
        
    }
}
