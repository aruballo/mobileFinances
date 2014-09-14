/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validateTransForm(){
    var amount = document.forms["transForm"]["transAmt"].value;
    var category = document.forms["transForm"]["transCat"].value;
    var description = document.forms["transForm"]["transDesc"].value;
    var date = document.forms["transForm"]["transDate"].value;
    
    if(amount == null || amount == ""){
        alert("Please fill out the amount.");
        return false;
    }
    else{
        return true;
    }
    if(category  == null || category == ""){
        alert("Please fill out the category.");
        return false;
    }
    else{
        return true;
    }
    if(date == null || date == ""){
        alert("Please fill out the date.");
        return false;
    }
    else{
        return true;
    }
    if(description == null || description == ""){
        alert("Please fill out the description.");
        return false;
    }
    else{
        return true;
    }
    
}

