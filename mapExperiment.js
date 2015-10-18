//Bill's map
makeId = (function(){
    var counter = 0;

    return function(){
        var ret = counter;
        counter += 1;
        return ret;
    };
})();

function GradientMap(){

    this.id = makeId();

    this.nationalData = ""

    this.mapJSON = "json/us-states.json";

    this.h = 1000;

    this.w = 1000;

    this.getNationalData = function(){}; //used to get national data array. User entered

    var map = this;

    this.setup = function(){

        //var container = document.createElement("div")
            //.attr("id", "mapContainer");

        this.mapDiv = d3.select("#mapContainer")
            .append("div")
            .style("width", this.h.toString()+"px");

        this.svg = this.mapDiv.append("svg")
            .attr("width", this.w)
            .attr("height", this.h)
            .attr("id", "map" + this.id.toString());

        return this;

    }

    this.drawMap = function(){

        this.projection = d3.geo.albersUsa()
            .translate([500, 500]);

        this.path = d3.geo.path()
            .projection(this.projection);

        d3.json(map.mapJSON, function(json){

            map.svg.selectAll("path")
                .data(json.features)
                .enter()
                .append("svg:path")
                .attr("d", map.path)
                .attr("id", function(d) {
                    return d.properties.name;
                })
                .attr("stroke", "black")
                .attr("stroke-width", "1")
                .style("fill", "rgb(0,0,255)");

        });

        return this;

    }

    this.setNationalDataFunction = function(fun){

        this.getNationalData = fun;

        this.nationalData = this.getNationalData();

    }

}