$(document).ready(function(){
  console.log("Iniciou");
  insereWidgets();
  carregaWidget();
});

function insereWidgets(){
  for(var i = 0; i < dashboard_data.length; i++){
    $("#widgetContainer").append(
      '<div class="col-lg-'+ dashboard_data[i].size + '">\
       <div class="panel panel-'+ dashboard_data[i].type + '">\
         <div class="panel-heading">\
          <h3 class="panel-title">' + dashboard_data[i].title + '</h3>\
          </div>\
          <div class="panel-body" url="'+ dashboard_data[i].url +'" time="'+ dashboard_data[i].time +'">\
            <p align="center">\
              <img src="ajax-loader.gif">\
            </p>\
          </div>\
        </div>\
      </div>'
    );
  }
}

function carregaWidget(){
  $('.panel-body').each(function(index,value){
    var painelAtual = $(this);
    $.ajax({
      url: $(this).attr("url"),
      success: function(data) {
        painelAtual.children().fadeOut( parseInt(painelAtual.attr("time")), function(){
          console.log(data.responseText);
          painelAtual.hide();
          painelAtual.append( data );
          painelAtual.slideDown();
        });
      },
      error: function(erro){
        console.log(erro.responseText);
      }
    });
  });
}