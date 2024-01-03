$(document).ready(() => {
  $("#click").click(function () {
    $("#div2").css("border-style", "solid");
    $("#div2").css("align-items", "center");
    $("#div2").css({
      "border-style": "solid",
      "align-items": "center",
      margin: "auto",
      width: "50%",
      padding: "10px",
    });
    // var name = $("input:text").val("#pn");
    var name = $("#pn").val();
    var ch = $("#ch").val();
    var ad = $("#ad").val();
    var adj = $("#adj").val();
    //$("#pn").css("color", "yellow");
    // window.alert(`${name}, ${ch}, ${ad}, ${adj}`);
    $("#title").html("Wendy's Crazy MadLibs Story");
    $(
      "#contents"
    ).html(`One day, my friend <span id='txt' style="color:green">${name}</span> was visting New York and ran</br>
             into <span id='txt' style="color:green">${ch}</span>. <span id='txt' style="color:green">${name}</span> ran <span id='txt' style="color:green">${ad}</span> to meet <span id='txt' style="color:green">${ch}</span> . But </br>
             <span id='txt' style="color:green">${ch}</span> turned out to be very <span id='txt' style="color:green">${adj}</span> and <span id='txt' style="color:green">${name}</span> did not</br>
             enjoy the meeting.`);
  });
  //$("#txt").css("color", "green");
});
