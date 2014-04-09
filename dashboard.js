$(document).ready(function(){
  console.log("Iniciou");
  insereWidgets();
});

function insereWidgets(){
  for(var i = 0; i < dashboard_data.length; i++){
    $("#widgetContainer").append(
      '<div class="col-lg-'+ dashboard_data[i].size + '">\
       <div class="panel panel-'+ dashboard_data[i].type + '">\
         <div class="panel-heading">\
          <h3 class="panel-title">' + dashboard_data[i].title + '</h3>\
          </div>\
          <div class="panel-body">\
            Panel content\
          </div>\
        </div>\
      </div>'
    );
  }
}