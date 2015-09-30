var dataArray = [5, 10, 15, 20];

makeId = (function(){
    var counter = 0;

    return function(){
        var ret = counter;
        counter += 1;
        return ret;
    };
})();

function circleCreator(dataSet1, dataSet2){
    
    var svg = d3.select("body")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);
    
    var obj = this;
    
    this.id = makeId();
    
    this.in1 = dataSet1;
    
    this.in2 = dataSet2;
    
    //if(typeof this.in1 == "array"){
        
        //this.data1 = this.in1
        
    //}else{
        
        
        
    //}
    //console.log(typeof this.in1);
    if(typeof this.in1 == "object"){
        
        this.data1 = this.in1;
        d3.select("svg").selectAll("circle")
            .data(obj.data1)
            .enter()
            .append("circle");
        d3.select("svg").selectAll("circle")
            .attr("r", function(d) {
                return d.r;
            })
            .attr("fill", function(d) {
                return d.r;
            })
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });
        
    }else{
        
        d3.csv(this.in1, function(d){ 
            d3.select("svg").selectAll("circle")
                .data(d)
                .enter()
                .append("circle");
            
            d3.select("svg").selectAll("circle")
                .attr("r", function(data) {
                    return +data.r;
                })
                .attr("fill", function(data) {
                    return +data.r;
                })
                .attr("cx", function(data) {
                    return +data.x;
                })
                .attr("cy", function(data) {
                    return +data.y;
                });
            
        }
        
        );
        
        
    }
    
    if(typeof this.in2 == "object"){
        
        this.data2 = this.in2;
        d3.select("svg").selectAll("rect")
                .data(this.data2)
                .enter()
                .append("rect");
            
            d3.select("svg").selectAll("rect")
                .attr("width", function(data) {
                    return +data.x;
                })
                .attr("height", function(data) {
                    return +data.x;
                })
                .attr("fill", function(data) {
                    return +data.x;
                })
                .attr("x", function(data) {
                    return +data.y;
                })
                .attr("y", function(data) {
                    return +data.y;
                });
        
    }else{
        d3.csv(this.in2, function(d){ 
            d3.select("svg").selectAll("rect")
                .data(d)
                .enter()
                .append("rect");
            
            d3.select("svg").selectAll("rect")
                .attr("width", function(data) {
                    return +data.x;
                })
                .attr("height", function(data) {
                    return +data.x;
                })
                .attr("fill", function(data) {
                    return +data.x;
                })
                .attr("x", function(data) {
                    return +data.y;
                })
                .attr("y", function(data) {
                    return +data.y;
                });
            
            }
        
        );
        
        //console.log(d[0].x);
        
        //});
        
        //console.log(this.data2);
        
    }
    
    //this.data1 = this.in1;
    
    //this.data2 = this.in2;
    
    //d3.select("svg").selectAll("circle")
    //    .data(obj.data1)
    //    .enter()
    //    .append("circle");
    
    //d3.select("svg").selectAll("rect")
    //    .data(obj.data2)
    //    .enter()
    //    .append("rect");
    
    //d3.selectAll("circle")
    //    .attr("r", function(d) {
    //        return d.r;
    //    })
    //    .attr("fill", function(d) {
    //        return d.r;
    //    })
    //    .attr("cx", function(d) {
    //        return d.x;
    //    })
    //    .attr("cy", function(d) {
    //        return d.y;
    //    });
    
    //d3.select("svg").selectAll("rect")
    //    .attr("width", function(d) {
    //        return d.x;
    //    })
    //    .attr("height", function(d) {
    //        return d.x;
    //    })
    //    .attr("fill", function(d) {
    //        return d.x;
    //    })
    //    .attr("x", function(d) {
    //        return d.y;
    //    })
    //    .attr("y", function(d) {
    //        return d.y;
    //    });
    
    
    
    
    return this;
}