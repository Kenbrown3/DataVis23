import * as d3 from "d3";
import { append } from "svelte/internal";


const SP = (NS,S,P)=>{

    d3.select("svg").remove();
    var width=600, height=600, spacing=100;

    var NSdata = NS;
    var Sdata = S;
    var POIdata=P;
    
    var svg =d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .append("g")
    .attr("transform","translate("+spacing/2+","+spacing/2+")");

    var xscale=d3.scaleLinear().domain([36.03,36.09]).range([0,width-spacing]);
    var yscale=d3.scaleLinear().domain([24.824,24.909]).range([height-spacing,0]);
    var color=d3.scaleOrdinal().domain(["professional","housing","catering","other"])
    .range(["blue","brown","green","yellow"])

    var xAxis=d3.axisBottom(xscale);
    var yAxis=d3.axisLeft(yscale);

    svg.append("g").attr("transform","translate(0,"+(height-spacing)+")").call(xAxis);
    svg.append("g").call(yAxis);

    var NSdots=svg.append("g").attr("class","NS").selectAll("dot").data(NS);
    var Sdots=svg.append("g").attr("class","S").selectAll("dot").data(S);
    var POIdots=svg.append("g").attr("class","P").selectAll("dot").data(P);

    NSdots.enter().append("circle")
    .attr("cx",function(d){return xscale(d.lat);})
    .attr("cy",function(d){return yscale(d.long);})
    .attr("r",3)
    .style("fill","black")
    .attr('fill-opacity', 0.01);

    Sdots.enter().append("circle")
    .attr("cx",function(d){return xscale(d.lat);})
    .attr("cy",function(d){return yscale(d.long);})
    .attr("r",3)
    .style("fill","red")
    .attr('fill-opacity', 0.8);

    POIdots.enter().append("circle")
    .attr("cx",function(d){return xscale(d.lat);})
    .attr("cy",function(d){return yscale(d.long);})
    .attr("r",3)
    .style("fill",function(d){return color(d.type);})
    .attr('fill-opacity', 1);

};


export default SP;





