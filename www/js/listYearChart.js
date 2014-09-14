/* Make request for listing Year Averages. If no category is provided, 
 * will pass category "all" to php program.
 */

function listYearAvg()
{
  //Check if year is empty
  if(document.getElementById("yearAvg").value === ''){
     document.getElementById("yearAvg").value = 2014; 
  }  
  var xmlHttp = getXMLHttp();
  var postString = '';
  
  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      yearChartResponse(xmlHttp.responseText);
    }
  }
  
  //post parameters to grab relevant data to chart
  postString = "yearAvg=" + document.getElementById("yearAvg").value;
  if(document.getElementById("avgCat").value != ''){
    postString += "&avgCat=" + document.getElementById("avgCat").value;
  }else{
    postString += "&avgCat=all";  
  }

  
  xmlHttp.open("POST", "http://192.168.8.108/FinancesCalculator/public_html/php/listYearChart.php", true);
  xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlHttp.send(postString);
}

function yearChartResponse(responseText){
    //Convert responseText into json object
    //array is needed to create google chart
    var parsed = JSON.parse(responseText);
    var array = [];
    
    array.push(["Month","$", { role: 'style' }]);
    array.push(['January', parsed.January, 'green']);
    array.push(['February', parsed.February, 'green']);
    array.push(['March', parsed.March, 'green']);
    array.push(['April', parsed.April, 'green']);
    array.push(['May', parsed.May, 'green']);
    array.push(['June', parsed.June, 'green']);
    array.push(['July', parsed.July, 'green']);
    array.push(['August', parsed.August, 'green']);
    array.push(['September', parsed.September, 'green']);
    array.push(['October', parsed.October, 'green']);
    array.push(['November', parsed.November, 'green']);
    array.push(['December', parsed.December, 'green']);
    
   //Create data table from the array
   var data = google.visualization.arrayToDataTable(array);
   var options = {
       title: 'Yearly Spending - ' + document.getElementById("avgCat").value
   };
   
   var chart = new google.visualization.BarChart(document.getElementById('barchart'));
   chart.draw(data, options);
   
}

