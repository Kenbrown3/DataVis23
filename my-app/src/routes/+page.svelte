<script>
import Scatterplot from './scatterplot.svelte';
import data2 from './data.js';

  export let data;
  const { cars, POIs } = data;

  const cars_coord = cars.map(coords=>{
    return {
      x:coords.lat,
      y:coords.long
    }
  })

  const poi_coord = POIs.map(coords=>{
    return {
      x:coords.lat,
      y:coords.long,
      name:coords.type
    }
  })



</script>

<h1>Kendall Brown - KU Leuven - r0773111</h1>
<p>Overview</p>


<Scatterplot points={cars_coord}/>