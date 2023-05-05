<script>

	// $: console.log('Changed selected:', selected)
	// $: console.log('Updated options:', options)

  import CarFilter from "./CarFilter";
  export let data;
  const { Cars, POIs, Stop } = data;

const all=["All"];

import _ from 'lodash';
 let idList = Cars.map(obj => obj.car_id)
 let uniqueIDs = _.uniq(idList);

 let selected = "All";
	    let options=all.concat(uniqueIDs);


$:console.log(CarFilter.CarTrackSelect(Cars,selected))
$:console.log(selected)
$:console.log(CarFilter.CarTrackNonSelect(Cars,selected))



</script>

<h1>Kendall Brown - KU Leuven - r0773111</h1>
<p>
  Overview
</p>
<p>
	Select Car to Highlight
	<select bind:value={selected}>
		{#each options as value}<option {value}>{value}</option>{/each}
	</select>
</p>

<!-- dropdown
(details -> selectedcars stopgrid)
unselected cars
selected cars
pois -->
