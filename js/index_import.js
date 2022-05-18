$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/LazyStrangg/kursavaya/master/xml/data.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
     
      $(data).find("apartmant").each(
        function(index, element){
              let field = $(element)
              alert(field.find("description").text())
        }
      )
      $(data).find("apartment".each(
          function (index, elemtnt) {
              let ops = $(element).document.getElementById("pagege").text()
             // let opd = document.getElementById("pagege")
             // ops.find("description").text()

		  }
      ))
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;