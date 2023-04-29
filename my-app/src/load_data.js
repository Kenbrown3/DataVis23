import axios from "axios";

class Coor {


    static async load_tracking() {
        let tracking = await axios.get("https://vda-lab.github.io/assets/vast2021_gps_coordinates.json");
        console.log(tracking);
        return tracking;

    }


 
        
}


    
export default Coor;