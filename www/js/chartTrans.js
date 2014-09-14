google.load("visualization", "1", {packages:["corechart"]});

function chartTransactions(month)
{
  var postString = '';
  //Check if month is empty
  if(month){
      postString = "chartMonth=" + month;  
  }
  else if(document.getElementById("chartMonth").value === 0){
      alert("Please select a Month to Chart. Year defaults to current year if left blank.");
      return;
  }
  else{
     postString = "chartMonth=" + document.getElementById("chartMonth").value;  
  }
  var xmlHttp = getXMLHttp();
  
  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      ChartResponse(xmlHttp.responseText);
    }
  }
  
  //post parameters to grab relevant data to chart
  if(document.getElementById("chartYear").value > 0){
    postString += "&chartYear=" + document.getElementById("chartYear").value;
  }else{
    postString += "&chartYear=" + new Date().getFullYear();  
  }

  
  xmlHttp.open("POST", "http://192.168.8.108/FinancesCalculator/public_html/php/chartTrans.php", true);
  xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlHttp.send(postString);
}

function ChartResponse(responseText){
        
        //Convert responseText into json object
        //array is needed to create google chart
        var parsed = JSON.parse(responseText);
        var array = [];
        var sum = 0;
        //Push all the relevant data from the 
        //JSON object into the array
        array.push(["Monthly Spending","In US Dollars"]);
        array.push(['groceries',parsed.groceries]);
        array.push(['bills', parsed.bills]);
        array.push(['gas', parsed.gas]);
        array.push(['food', parsed.food]);
        array.push(['misc', parsed.misc]);
        array.push(['fees', parsed.fees]);
        array.push(['frivolous', parsed.frivolous]);
        
        //Create data table from the array
        var data = google.visualization.arrayToDataTable(array);
        var options = {
          title: 'Monthly Spending'
        };
        
        //Create chart
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
        sum = parsed.groceries + parsed.bills + parsed.gas + parsed.food + parsed.misc + parsed.fees + parsed.frivolous;
        document.getElementById('total').innerHTML = "<b>Total</b>: $" + sum;
        document.getElementById('total').style.visibility = 'visible';
}