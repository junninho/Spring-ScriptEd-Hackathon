/* global $ */

var gender = ["male", "female"];
var skin = ["skin1", "skin2"];
var clothing = ["clothes1", "clothes2"];
var chosen = {
    gender: gender[0],
    skin: skin[0],
    clothing: clothing[0],
};

var display = "images/" + chosen.gender + "/" + chosen.gender + "-" + chosen.skin + "-" + chosen.clothing;

$(document).ready(function() {
    var toReplace = '';
    var index = 0;
    
    $("#customBar .btn").click(function() {
        console.log("clicked" + $(this).attr('id'));
        
        switch ($(this).attr('id')) {
            case "gender":
                for (var i = 0; i < gender.length; i++) {
                    toReplace += createOption(gender[i], 'gender');
                }
                $("#items").html(toReplace);
                toReplace = '';
                index = 0;
                break;
            case "skin":
                for (var i = 0; i < skin.length; i++) {
                    toReplace += createOption(skin[i], 'skin');
                }
                $("#items").html(toReplace);
                toReplace = '';
                index = 1;
                break;
            case "clothing":
                for (var i = 0; i < clothing.length; i++) {
                    toReplace += createOption(clothing[i], 'clothing');
                }
                $("#items").html(toReplace);
                toReplace = '';
                index = 2;
                break;
        }
    });

    $('#items').on('click', '.option', function(){

    //$(".option").click(function() {
        var optionType = $(this).attr('data-option-type');
        chosen[optionType] = $(this).attr('id').split('-')[1];
        var display = "images/" + chosen.gender + "/" + chosen.gender + "-" + chosen.skin + "-" + chosen.clothing + ".png";
        $(".charimage").css("background-image", "url("+ display +")");
    });
    
    $("#continue").click(function(){
        //var tabs = $("#customBar .btn");
        index++;
        if(index > 2){
            index = 2;
            
        }
        $("." + index.toString()).trigger("click");
    });

});



function createOption(str, optionType) {
    var result = '';
    result += '<li class="option btn" data-option-type="'+ optionType +'" id ="';
    result += 'option-' + str + '"';
    result += '>';
    result += str;
    result += '</li>';

    return result;
}
//$(#gender).click(function){
    
    
    
    

