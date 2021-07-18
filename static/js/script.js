$(document).ready(function(){

  var CC, YY, MM, DD, d, dayValue;
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
  
  

  // form validation function

  function validate() {
    var genders = document.getElementsByName("gender");
    if( document.akanForm.year.value == "" || document.akanForm.year.value.length !=4 || document.akanForm.year.value >2100 || document.akanForm.year.value <=1900) {
       alert( "Type a valid year eg 1992" );
       document.akanForm.year.focus() ;
       return false;
    }
    else if( document.akanForm.month.value == "" || isNaN( document.akanForm.month.value ) || 
    document.akanForm.month.value.length != 2 || document.akanForm.month.value > 12  || document.akanForm.month.value <= 0){
       alert( "Typea a valid entry eg 05 for May" );
       document.akanForm.month.focus() ;
       return false;
    }
    else if( document.akanForm.date.value == "" || isNaN( document.akanForm.month.value ) || 
    document.akanForm.month.value.length != 2|| document.akanForm.date.value > 31 || document.akanForm.date.value <= 0) {
       alert( "Type a valid date" );
       document.akanForm.day.focus() ;
       return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("select male or female");
        return false;
    }   
    else{
      return true ;
    }
    
  }

  // calculating day value

  function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
  }

  // gender search
  function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }
    switch(gender){
      case "male":
        if (dayValue == 1){
          alert("You were born on " +dayNames[0] + " , Your akan name is " +maleNames[0]+"!");
        }
        else if(dayValue == 2){
          alert("You were born on "+dayNames[1] + " , Your akan name is " +maleNames[1]+"!");
        }
        else if(dayValue == 3){
          alert("You were born on " +dayNames[2]+ " , Your akan name is " +maleNames[2]+"!");
        }
        else if(dayValue == 4){
          alert("You were born on "+dayNames[3] +  " , Your akan name is " +maleNames[3]+"!");
        }
        else if(dayValue == 5){
          alert("You were born on "+dayNames[4] +  " , Your akan name is " +maleNames[4]+"!");
        }
        else if(dayValue == 6){
          alert("You were born on "+dayNames[5] +  " , Your akan name is " +maleNames[5]+"!");
        }
        else if(dayValue == -0){
          alert("You were born on "+dayNames[6] + " , Your akan name is " +maleNames[6]+"!");
        }
      break;
      case "female":
        if (dayValue == 1){
          alert("You were born on "+dayNames[0] + " , Your akan name is  " +femaleNames[0]+"!");
        }
        else if(dayValue == 2){
          alert("You were born on " +dayNames[1] + " , Your akan name is " +femaleNames[1]+"!");
        }
        else if(dayValue == 3){
          alert("You were born on " +dayNames[2] + " , Your akan name is " +femaleNames[2]+"!");
        }
        else if(dayValue == 4){
          alert("You were born on " +dayNames[3] + " , Your akan name is " +femaleNames[3]+"!");
        }
        else if(dayValue == 5){
          alert("You were born on " +dayNames[4] + " , Your akan name is " +femaleNames[4]+"!");
        }
        else if(dayValue == 6){
          alert("You were born on " +dayNames[5] + " , Your akan name is " + femaleNames[5]+"!");
        }else if(dayValue == -0){
          alert("You were born on " +dayNames[6] + " , Your akan name is " +femaleNames[6]+"!");
        }
      break
      default:
            
    }
  }
  function getName(){
    dayValue = calculateDayValue();
    getGender();
  }
}