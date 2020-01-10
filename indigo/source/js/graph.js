(function($) {
	
	var map = {}; // for github
	var github = window.atob(($("#activeness-graph").attr("github")));
	var gk = window.atob($("#activeness-graph").attr("coding"));
	var contract = $("#activeness-graph").attr("contract");
	
	var datalength = 0;
    var cellSize = 10,
        cellBlank = 1,
        showOddDaysOfWeek = true,
        fontSize = 12;
    var daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	
	// not suitable color with github contributions
	
    var defineCellColor = function(data) {
        var i, max = 0;
        for (i = 0; i < datalength; i++) {
            if (data[i].count > max) {
                max = data[i].count;
            }
        }
        if (max == 0) {
            return function() {
                return "#eeeeee";
            };
        }
        if (max > 99) {
            max = 99;
        }
        return function(count) {
			if(!count){
				return "#eeeeee";
			}
            var percentage = Math.ceil(count * 100 / max);
            if (percentage == 0) {
                return "#eeeeee";
            } else if (1 <= percentage && percentage <= 24) {
                return "#d6e685";
            } else if (25 <= percentage && percentage <= 49) {
                return "#8cc665";
            } else if (50 <= percentage && percentage <= 74) {
                return "#44a340";
            } else if (75 <= percentage) {
                return "#1e6923";
            }
        };
    };

    var generateGraph = function(data) {
        var i, x, cellColor, dayNode, weekNode, weekNodes = [],cnt;
        cellColor = defineCellColor(data);
        for (i = 0; i < datalength- ( 7 * contract ) ; i++) {
			
			// coding + github
			cnt = data[i+ ( 7 * contract ) ].count + map[data[i+ ( 7 * contract ) ].date];
			
            if (i % 7 == 0) {
                x =  (cellSize + cellBlank) * Math.round(i / 7);
                weekNode = $('<g></g>').attr('transform', 'translate(' + x + ', 0)');
                weekNodes.push(weekNode);
            }
            dayNode = $('<rect></rect>')
                .addClass('day')
                .attr('width', cellSize)
                .attr('height', cellSize)
                .attr('y', (cellSize + cellBlank) * (i % 7))
                .attr('fill', cellColor(cnt ))
				.attr('data-toggle','tooltip')
				.attr('data-original-title','this is alert content')
				.attr('data-count', cnt)
                .attr('data-date', data[i+ ( 7 * contract ) ].date);
			var txt = $('<title>热度:'+cnt +'&#10日期:'+ data[i+ ( 7 * contract ) ].date+'</title>');
			dayNode.append(txt);
			
            weekNode.append(dayNode);
		 
        }
        return weekNodes;
    };

    var generateScale = function(data) {
        var i, d, x, textNode, scales = [];
        for (i = 0; i < datalength- ( 7 * contract ) ; i += 7) {
            d = moment(new Date(data[i+ ( 7 * contract ) ].date));
            if (i === 0) {
                if (d.date() > d.endOf('month').date() - 14) {
                    continue;
                }
            } else {
                if (!(d.date() <= 7 && i + 7 < datalength)) {
                    continue;
                }
            }
            x = (cellSize + cellBlank) * Math.round(i / 7);
            textNode = $('<text></text>')
                .attr('x', x)
                .attr('y', -5)
                .addClass('month')
                .text(months[d.month()]);
            scales.push(textNode);
        }
        for (i = 0; i < 7; i++) {
            textNode = $('<text></text>')
                .attr('text-anchor', 'middle')
                .addClass('wday')
                .attr('dx', -7)
                .attr('dy', (cellSize + cellBlank) * (i % 7 + 1) - 2)
                .text(daysOfWeek[i]);
            if (showOddDaysOfWeek && i % 2 == 0) {
                textNode.attr('style', 'display: none;');
            }
            scales.push(textNode);
        }
        return scales;
    };

    var mergeSvg = function(data) {
        var canvas, svg, columns, element = $('#activeness-graph');
        columns = Math.floor((datalength- ( 7 * contract ) ) / 7) + ((datalength- ( 7 * contract ) ) % 7 === 0 ? 0 : 1);
        

		
		canvas = $('<g></g>')
            .attr('transform', 'translate(13, 16)')
            .append(generateGraph(data))
            .append(generateScale(data));
        svg = $('<svg></svg>')
            .attr('width', fontSize + 3 + cellSize * columns + cellBlank * (columns - 1))
            .attr('height', fontSize + 5 + cellSize * 7 + cellBlank * 6)
            .append(canvas);
        element.empty();
        element.append(svg[0].outerHTML);
    };
    
	//- ----------------
	
	
	$('#activeness-graph').append('<img style="width:2em;height:2em;border:0px;box-shadow:0 1px 2px rgba(151, 151, 151, 0)" src="../feedek/loader.gif" />');

 
    $.get('https://www.easy-mock.com/mock/5a5818e90e99d55b64ad9b5b/user/activeness/data/' + window.atob(gk), function(result) {
        
		$.ajax('https://github-contributions-api.now.sh/v1/'+window.atob(github), {
			dataType: 'json',
			type: 'GET',
			//async:false,	// necessary
			crossDomain: true, // also work without this line
			success: function(data) {
				$.each(data.contributions, function(index, item){ 
					map[item.date] = item.count;
				});
				if (result.code === 0) {
					datalength = result.data.daily_activeness.length;
					mergeSvg(result.data.daily_activeness);
				}	
			}
		});
		
		
		

    });
	//$(document).on("mouseenter", ".day", function (){
	//	console.log($(this)[0].dataset.count);
	//});
	//$(document).on("mouseleave", ".day", function (){
	//	//console.log("mouseleave");
	//});
	//$(document).on("click", ".day", function () {
	//	alert($(this)[0].dataset.count);
	//});
	//$('[data-toggle="tooltip"]').tooltip();   
	//<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	//<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">

})(window.jQuery);
