 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function deleteTransaction(id){
    var postString = '';
    
    var xmlHttp = getXMLHttp();
  
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState == 4){    
            deleteResponse(xmlHttp.responseText);
        }        
    }
    
    postString = "id=" + id;
    xmlHttp.open("POST", "http://192.168.8.108/FinancesCalculator/public_html/php/deleteTrans.php", true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send(postString);
}

function deleteResponse(response){
    document.getElementById('listTransBtn').click();
    alert("Transaction Deleted!")
}