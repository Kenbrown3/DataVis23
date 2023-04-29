export const load = async () => {

    const fetchCoords = async () => {   
        const productRes = await fetch('https://vda-lab.github.io/assets/vast2021_gps_coordinates.json')
        const productData = await productRes.json()
        return productData
    }

    return {
       coords: fetchCoords(),
    }
}