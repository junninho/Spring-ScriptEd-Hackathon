// JavaScript File

var gender = ["Male", "Female"]
var skin = ["<li>Skin 1</li>", "<li>Skin 2</li>", "<li>Skin 3</li>"]
var clothing = ["<li>Clothing 1</li>", "<li>Clothing 2</li>"]
var colors = ["<li>Red</li>", "<li>Black</li>", "<li>Blue</li>", "<li>Green</li>", "<li>Pink</li>", "<li>Purple</li>"];
var technique = [];
var weapon = ["<li>Sword</li>", "<li>Katana</li>", "<li>Staff</li>"];

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


});

$()

function createOption(str) {
    var result = '';
    result += '<li class="option btn" id =""';
    result += 'option-' + str + '"';
    result += '>';
    result += str;
    result += '</li>';
    
    return result;
}



// function createParagraph(str) {
//     var result = '';
//     result += '<li class="option" id="';
//     result += 'option-' + str;
//     result += str;
//     result += '</li>';

//     return result;
// }

// createParagraph('thissi a pgraph')