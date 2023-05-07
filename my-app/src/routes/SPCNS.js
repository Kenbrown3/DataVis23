import * as d3 from "d3";
import { append } from "svelte/internal";

const SPCNS = (DataOBJ)=>{
    var width=600, height=600, spacing=100;
    var data = DataOBJ;
    
    var svg =d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .append("g")
    .attr("transform","translate("+spacing/2+","+spacing/2+")");

    var xscale=d3.scaleLinear().domain([36.03,36.09]).range([0,width-spacing]);
    var yscale=d3.scaleLinear().domain([24.824,24.909]).range([height-spacing,0]);

    var xAxis=d3.axisBottom(xscale);
    var yAxis=d3.axisLeft(yscale);

    svg.append("g").attr("transform","translate(0,"+(height-spacing)+")").call(xAxis);
    svg.append("g").call(yAxis);

    var dots=svg.append("g").selectAll("dot").data(data);

    dots.enter().append("circle")
    .attr("cx",function(d){return xscale(d.lat);})
    .attr("cy",function(d){return yscale(d.long);})
    .attr("r",5)
    .style("fill","black")
    .attr('fill-opacity', 0.01);

};

export default SPCNS;





