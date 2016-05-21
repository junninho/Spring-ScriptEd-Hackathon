/* global $ */

var gender = ["Male", "Female"]
var skin = ["Skin 1", "Skin 2", "Skin 3"]
var clothing = ["Clothing 1", "Clothing 2"]
var colors = ["Red", "Black", "Blue", "Green", "Pink", "Purple"];
var technique = [];
var weapon = ["Sword", "Katana", "Staff"];

$(document).ready(function() {
    var toReplace = '';

    $("#customBar .btn").click(function() {
        console.log("clicked" + $(this).attr('id'));
        
        switch ($(this).attr('id')) {
            case "gender":
                for (var i = 0; i < gender.length; i++) {
                    toReplace += createOption(gender[i]);
                }
                $("#items").html(toReplace);
                toReplace = '';
                break;
            case "skin":
                for (var i = 0; i < skin.length; i++) {
                    toReplace += createOption(skin[i]);
                }
                $("#items").html(toReplace);
                toReplace = '';
                break;
            case "technique":
                for (var i = 0; i < technique.length; i++) {
                    toReplace += createOption(technique[i]);
                }
                $("#items").html(toReplace);
                toReplace = '';
                break;
            case "clothing":
                for (var i = 0; i < clothing.length; i++) {
                    toReplace += createOption(clothing[i]);
                }
                $("#items").html(toReplace);
                toReplace = '';
                break;
            case "colors":
                for (var i = 0; i < colors.length; i++) {
                    toReplace += createOption(colors[i]);
                }
                $("#items").html(toReplace);
                toReplace = '';
                break;
            case "weapon":
                for (var i = 0; i < weapon.length; i++) {
                    toReplace += createOption(weapon[i]);
                }
                $("#items").html(toReplace);
                toReplace = '';
                break;
        }
    });

    $('#items').on('click', '.option', function(){

    //$(".option").click(function() {
        console.log("click", $(this));
        
    });


});



function createOption(str) {
    var result = '';
    result += '<li class="option btn" id ="';
    result += 'option-' + str + '"';
    result += '>';
    result += str;
    result += '</li>';

    return result;
}