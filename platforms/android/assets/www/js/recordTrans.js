//Originally, I was recording transactions using a form submission.
//However, I did not like the refreshing that occurs, and so 
//I changed it to an AJAX submission. 

function recordTransaction()
{
  if(validateTransForm()){
    var xmlHttp = getXMLHttp();
    var postString = '';
    xmlHttp.onreadystatechange = function()
    {
      if(xmlHttp.readyState == 4)
      {
        recordResponse(xmlHttp.responseText);
      }
    }

    postString += "transAmt=" + document.getElementById("transAmt").value;
    postString += "&transCat=" + document.getElementById("transCat").value;
    postString += "&transDate=" + document.getElementById("transDate").value;
    postString += "&transDesc=" + document.getElementById("transDesc").value;

    xmlHttp.open("POST", "http://192.168.8.108/FinancesCalculator/public_html/php/transactions.php", true); 
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send(postString);
    }
}

function recordResponse(responseText){
   
   //Wanted all charts to recalculate automatically on transaction record. 
   //google charts come out tiny atm if this is done though so for now its on hold. 
   /* var date = new Date(document.getElementById("transDate").value);
    var month = date.getMonth();
    month = month + 1;
    
    listTransactions(month);
    chartTransactions(month);
    listYearAvg();
    */
   
    //Clear the values now that they've been submitted.
    document.getElementById("transAmt").value = '';
    document.getElementById("transCat").value = '';
    document.getElementById("transDate").value = '';
    document.getElementById("transDesc").value = '';
    document.getElementById("transAmt").focus();
    alert("Transaction Recorded!")
   
}
