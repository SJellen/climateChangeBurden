let climate_daly_data = d3.json("./data.json")



let toggleClass = (i,toggle) => {
    d3.select("#viz div:nth-child("+ i +")").classed("highlightBar",toggle);
    d3.select("#legend li:nth-child("+ i +")").classed("highlightText",toggle);
 };