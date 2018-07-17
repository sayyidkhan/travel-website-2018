/* ############################### Validate Empty Value Javascript Function ############################# */

$('#submitButton').click(function(event){
   if($("#txtTitle").val() == ''){
     $("#txtTitle").one().addClass('js-input-orange-bottom');
     $("#txtTitle-bar").one().addClass('js-bar-orange');
     alert("Title of travel package is required");
     //return false;
     event.preventDefault();
   }
/* ############################### Country Javascript Function ############################# */
  var CountryChecker = countries.includes(($("#txtCountry").val()));
  if($("#txtCountry").val() == '' || CountryChecker == false) {
     $("#txtCountry").one().addClass('js-input-orange-bottom');
     $("#txtCountry-bar").one().addClass('js-bar-orange');
     alert("Country of Travel is required or Invalid Country entered.");
     //return false;
     event.preventDefault();
   }
/* ############################### Country Javascript Function ############################# */
/* ############################### price Javascript Function ############################# */
   var validateNumber = ($("#txtPrice").val());
   if($("#txtPrice").val() == '' || isNaN(validateNumber) == true) {
     $("#txtPrice").one().addClass('js-input-orange-bottom');
     $("#txtPrice-bar").one().addClass('js-bar-orange');
     alert("Price of travel package is required");
     //return false;
     event.preventDefault();
   }
/* ############################### price Javascript Function ############################# */
/* ############################### date Javascript Function ############################# */
  /// function to validate whether date is valid ///
  function isValidDate(checkDate) {
  var bits = checkDate.split('/');
  var d = new Date(bits[2] + '/' + bits[1] + '/' + bits[0]);
  return !!(d && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[0]));
  }
  /// function to validate whether date is valid ///
  // console.log(isValidDate('30/09/2011')); //testSet < !!! do not remove !!! >
   if($("#txtStartdate").val() == '' || isValidDate($("#txtStartdate").val()) == false) {
     $("#txtStartdate").one().addClass('js-input-orange-bottom');
     $("#txtStartdate-bar").one().addClass('js-bar-orange');
     alert("Start date of travel package is required or Incorrect Date type format.Enter in dd/mm/yyyy format.");
     // return false;
     event.preventDefault();
   }
   if($("#txtEnddate").val() == '' || isValidDate($("#txtStartdate").val()) == false) {
     $("#txtEnddate").one().addClass('js-input-orange-bottom');
     $("#txtEnddate-bar").one().addClass('js-bar-orange');
     alert("End date of travel package is required or Incorrect Date type format.Enter in dd/mm/yyyy format.");
     // return false;
     event.preventDefault();
   }
/* ############################### date Javascript Function ############################# */
   if($("#txtDescription").val() == '') {
     $("#txtDescription").one().addClass('js-input-orange-bottom');
     $("#txtDescription-bar").one().addClass('js-bar-orange');
     alert("Description for travel package is required");
     // return false;
     event.preventDefault();
   }

   
});

/* ############################### Validate Empty Value Javascript Function ############################# */


/* ###############################  validate data Javascript Function, Q2 & Q3 ############################# */

$(document).ready(function(){
  
  ///////////////////////////////////// Title Function ///////////////////////////////////
  $("#txtTitle").focus(function(){
    // if content is empty change value to yellow
    if($("#txtTitle").val() == ''){
      $("#txtTitle-bar").one().addClass('js-bar-orange');
      $("#txtTitle").one().addClass('js-input-orange-bottom').addClass('font-color-orange').removeClass('font-color-EFEFEA');
    }

  }); 

  $("#txtTitle").keypress(function(){
    // if content is NOT EMPTY change value to bar change to white and text to green
    if ($("#txtTitle").val() !== ''){
      $("#txtTitle-bar").one().removeClass('js-bar-orange').addClass("bar");
      $("#txtTitle").one().removeClass('js-input-orange-bottom').removeClass('font-color-orange').addClass("font-color-green");
      //$("#txtTitle-info").one().append('<p> Looks Good! </p>');
    }

  });
  ///////////////////////////////////// Title Function ///////////////////////////////////
  
  ///////////////////////////////////// Country Function ///////////////////////////////////
  $("#txtCountry").focus(function(){
    // if content is empty change value to yellow
    var CountryChecker = countries.includes(($("#txtCountry").val()));
    if($("#txtCountry").val() == '' || CountryChecker == false){
      $("#txtCountry-bar").one().addClass('js-bar-orange');
      $("#txtCountry").one().addClass('js-input-orange-bottom').addClass('font-color-orange').removeClass('font-color-EFEFEA');
    }

  });

  $("#txtCountry").mouseout(function(){
    // if content is NOT EMPTY change value to bar change to white and text to green
    var CountryChecker = countries.includes(($("#txtCountry").val()));
    if (CountryChecker == true){
      $("#txtCountry-bar").one().removeClass('js-bar-orange').addClass("bar");
      $("#txtCountry").one().removeClass('js-input-orange-bottom').removeClass('font-color-orange').addClass("font-color-green");
      
    }

  });
  ///////////////////////////////////// Country Function ///////////////////////////////////
  
  ///////////////////////////////////// Price Function ///////////////////////////////////
  $("#txtPrice").focus(function(){
    // add warning if value is incorrect 
    var validateNumber = ($("#txtPrice").val());

  if($("#txtPrice").val() == '' || isNaN(validateNumber) == true){
      $("#txtPrice-bar").one().addClass('js-bar-orange');
      $("#txtPrice").one().addClass('js-input-orange-bottom').addClass('font-color-orange').removeClass('font-color-EFEFEA');
    }
  });
  
  /// remove the $ dollar sign ///
  $("#txtPrice").keypress(function(){

    ////////////////// question 4 //////////////////
    // if content have $ remove
    if (($("#txtPrice").val()).indexOf('$') > -1){
      //alert ("test"); //testSet < !!! do not remove !!! >
      // Replace $ with another whitespace
      var str = ($("#txtPrice").val());
      var newStr = str.replace(/\$/g, '');
      //console.log(newStr);

      // Remove white spaces from both sides
      var finalstr =  newStr.trim();
      //console.log(finalstr);
      $('#txtPrice').val(finalstr);
    
    }
    ////////////////// question 4 //////////////////
  });
  
  /// add  the correct validation when value is correct ///
  $("#txtPrice").mouseout(function(){
    var validateNumber = ($("#txtPrice").val());

    // if content contains valid number and not empty it will turn green
    if (isNaN(validateNumber) == false && $("#txtPrice").val() !== ''){
      $("#txtPrice-bar").one().removeClass('js-bar-orange').addClass("bar");
      $("#txtPrice").one().removeClass('js-input-orange-bottom').removeClass('font-color-orange').addClass("font-color-green");
      
    }

  });

  ///////////////////////////////////// Price Function ///////////////////////////////////
  
  ///////////////////////////////////// date Function ///////////////////////////////////
  /// function to validate whether date is valid ///
  function isValidDate(checkDate) {
  var bits = checkDate.split('/');
  var d = new Date(bits[2] + '/' + bits[1] + '/' + bits[0]);
  return !!(d && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[0]));
  }
  /// function to validate whether date is valid ///
  // console.log(isValidDate('30/09/2011')); //testSet < !!! do not remove !!! >
  
  //////////// start date function //////////// 
  $("#txtStartdate").focus(function(){
    // if content is empty or value is false for date, change value to yellow
    if($("#txtStartdate").val() == '' || isValidDate($("#txtStartdate").val()) == false){
      $("#txtStartdate-bar").one().addClass('js-bar-orange');
      $("#txtStartdate").one().addClass('js-input-orange-bottom').addClass('font-color-orange').removeClass('font-color-EFEFEA');
    }

  });
  $("#txtStartdate").mouseout(function(){
    // if content date is correct  change value to bar change to white and text to green
    if (isValidDate($("#txtStartdate").val()) == true){
      $("#txtStartdate-bar").one().removeClass('js-bar-orange').addClass("bar");
      $("#txtStartdate").one().removeClass('js-input-orange-bottom').removeClass('font-color-orange').addClass("font-color-green");
      // $("#txtTitle-info").one().append('<p> Looks Good! </p>');
    }

  });
  //////////// start date function //////////// 
  
  //////////// end date function //////////// 
  $("#txtEnddate").focus(function(){
    // if content is empty or value is false for date, change value to yellow
    if($("#txtEnddate").val() == '' || isValidDate($("#txtStartdate").val()) == false){
      $("#txtEnddate-bar").one().addClass('js-bar-orange');
      $("#txtEnddate").one().addClass('js-input-orange-bottom').addClass('font-color-orange').removeClass('font-color-EFEFEA');
    }

  });
  $("#txtEnddate").mouseout(function(){
    // if content date is correct  change value to bar change to white and text to green
    if (isValidDate($("#txtEnddate").val()) == true){
      $("#txtEnddate-bar").one().removeClass('js-bar-orange').addClass("bar");
      $("#txtEnddate").one().removeClass('js-input-orange-bottom').removeClass('font-color-orange').addClass("font-color-green");
      // $("#txtTitle-info").one().append('<p> Looks Good! </p>');
    }

  });
  //////////// end date function ////////////

  ///////////////////////////////////// date Function ///////////////////////////////////

  ///////////////////////////////////// description Function /////////////////////////////////// 
  ////////////////// question 5 ////////////////// 
  $('#txtDescription').keyup(updateCount);
  $('#txtDescription').keydown(updateCount);

  function updateCount() {
    var characters = $(this).val().length;
    var display_characters = "Total characters typed: " + characters
    $('#display_count').text(display_characters);
  }
  ////////////////// question 5 //////////////////

  $("#txtDescription").focus(function(){
    // if content is empty change value to yellow
    if($("#txtDescription").val() == ''){
      //  empty the display count when there is no text
      $('#display_count').text("");
      $("#txtDescription-bar").one().addClass('js-bar-orange');
      $("#txtDescription").one().addClass('js-input-orange-bottom').addClass('font-color-orange').removeClass('font-color-EFEFEA');
    }

  });

  $("#txtDescription").keypress(function(){
    // if content is NOT EMPTY change value to bar change to white and text to green
    if ($("#txtDescription").val() !== ''){
      $("#txtDescription-bar").one().removeClass('js-bar-orange').addClass("bar");
      $("#txtDescription").one().removeClass('js-input-orange-bottom').removeClass('font-color-orange').addClass("font-color-green");
    }

  });

  ///////////////////////////////////// description Function ///////////////////////////////////  


});
/* ############################### validate data Javascript Function ############################# */

