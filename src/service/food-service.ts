export default class FoodService {

    _apiBase = 'http://localhost:3012';

    getResource = async (url: string) => {
        return await fetch(`${this._apiBase}${url}`)
            .then((res) => {
                return res.json()
            })
            .catch((err) => console.log(err))
    }

    getProductsList = async () => {
        const res = await this.getResource('/products');
        console.log(res);
    }
}
