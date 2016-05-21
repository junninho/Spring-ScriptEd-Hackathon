// JavaScript File




$('#customBar.btn').click(function(){
    switch(this.attr('id')){
        case "gender":
            $("#options").append("<ul>")
            for(var i = 0; i < gender.length; i++){
                $("#options").append(gender[i]);
            }
            $("#options").append("</ul>");
        break;
        case "skin":
            $("#options").append("<ul>")
            for(var i = 0; i < skin.length; i++){
                $("#options").append(skin[i]);
            }
            $("#options").append("</ul>");
        break;
        case "technique":
            $("#options").append("<ul>")
            for(var i = 0; i < technique.length; i++){
                $("#options").append(technique[i]);
            }
            $("#options").append("</ul>");
        break;
        case "clothing":
            $("#options").append("<ul>")
            for(var i = 0; i < clothing.length; i++){
                $("#options").append(clothing[i]);
            }
            $("#options").append("</ul>");
        break;
        case "colors":
            $("#options").append("<ul>")
            for(var i = 0; i < colors.length; i++){
                $("#options").append(colors[i]);
            }
            $("#options").append("</ul>");
        break;
        case "weapon":
            $("#options").append("<ul>")
            for(var i = 0; i < weapon.length; i++){
                $("#options").append(weapon[i]);
            }
            $("#options").append("</ul>");
        break;
    }
})

var gender=["<li>Male</li>" , "Female"]
var skin=[]
var clothing=[]
var colors=[]
var technique=[]
var weapon=["Sword", "Katana", "Staff"]