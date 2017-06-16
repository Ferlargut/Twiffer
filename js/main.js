
var cargarPagina = function () {
    $("#publicar").click(crearTwifer);
    $(".twifer").on("click",borrarTwifer);
};
var $twiFers = $("#coment");
var plantillaTwifer =
                    "<div class='contentTwifer card light-blue lighten-3'>"+
                        "<div class='card-content white-text'>"+
                            "<span class='card-title'>__autor__</span>"+
                            "<p>__twifer__</p>"+
                        "</div>"+
                        "<div class='card-action'>"+
                            "<button type='submit' class='twifer btn waves-effect waves-light' type='button'>borrar</button>"+                            
                        "</div>"
                    "</div>";

var borrarTwifer = function () {
 $(this).parents(".contentTwifer").remove();
};       
var crearTwifer = function (e) {
    e.preventDefault();
    var $autor = $("#input_text");
    var $twifer = $("#textarea1");
    var $imprimirTwifer = plantillaTwifer.replace("__autor__",$autor.val()).replace("__twifer__",$twifer.val());
    $twiFers.prepend($imprimirTwifer);
    $autor.val("");
    $twifer.val("");
    console.log($autor,$twifer);
};

$(document).ready(cargarPagina);