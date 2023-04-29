import axios from "axios";

class Coor {


    static async load_tracking() {
        let raw_tracking = await fetch("https://vda-lab.github.io/assets/vast2021_gps_coordinates.json");
        let tracking = await raw_tracking.json();
        console.log(tracking);
        return tracking;

    }


 
        
}


    
export default Coor;