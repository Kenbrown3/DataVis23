<script>
import * as d3 from "d3";

import CarFilter from "./CarFilter";
export let data;

const { Cars, POIs, Stop } = data;
const all=["All"];

import _ from 'lodash';
 let idList = Cars.map(obj => obj.car_id)
 let uniqueIDs = _.uniq(idList);

 let selected = "All";
	    let options=all.concat(uniqueIDs);

// $:console.log(selected)
// $:console.log(CarFilter.CarTrackSelect(Cars,selected))
// $:console.log(CarFilter.CarTrackNonSelect(Cars,selected))


import SP from "./SP";
$:setTimeout(() => {
	SP(CarFilter.CarTrackNonSelect(Cars,selected),
	CarFilter.CarTrackSelect(Cars,selected),POIs)
}, 1000);

</script>


<h1>Kendall Brown - KU Leuven - r0773111</h1>
<h2>
  Overview
</h2>
<p>
	Select Car to Highlight
	<select bind:value={selected}>
		{#each options as value}<option {value}>{value}</option>{/each}
	</select>
</p>
