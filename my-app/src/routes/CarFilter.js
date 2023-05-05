const CarTrackSelect = (DataOBJ, CarNum) => {
    return DataOBJ.filter((carobj)=>carobj.car_id===CarNum)
}

const CarTrackNonSelect = (DataOBJ,CarNum) =>{
    return DataOBJ.filter((carobj)=>carobj.car_id!==CarNum)
}


export default {CarTrackSelect,CarTrackNonSelect}
