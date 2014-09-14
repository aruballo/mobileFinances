//List all transactions (according to month and year passed) 
//and place them into a table.

function listTransactions(month)
{
  var xmlHttp = getXMLHttp();
  var postString = '';
  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      ListResponse(xmlHttp.responseText);
    }
  }
  
  if(month){
     postString = "listMonth=" + month;  
  }
  else{
     postString = "listMonth=" + document.getElementById("listMonth").value;
  }
 
  if(document.getElementById("chartYear").value > 0){
    postString += "&listYear=" + document.getElementById("listYear").value;
  }else{
    postString += "&listYear=" + new Date().getFullYear();  
  }
  
  xmlHttp.open("POST", "http://192.168.8.108/FinancesCalculator/public_html/php/listTrans.php", true); 
  xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlHttp.send(postString);
}

function ListResponse(responseText){
    document.getElementById("transTableDiv").innerHTML = responseText;
     $("#transTable").tablesorter().tablesorterPager({container: $("#pager")});
}

