join_aray=[];
function join(){
    var display_student=[];
    for (var j = 1; j <= 12; j++) {
         var box_no = document.getElementById("box"+j).value;
          console.log(box_no);
           join_aray.push(box_no);
         } 
var length_aray=join_aray.length;
for(var k=0; k<length_aray; k++ ){
    display_student.push(join_aray[k]);
}
var meme=display_student.join(" ") ;
document.getElementById("display").innerHTML=meme;
document.getElementById("join_button").style.display="none";
}
function sorting(){
    student_aray.sort();
    var display_student=[];
    var length_aray=student_aray.length;
for(var k=0; k<length_aray; k++ ){
    display_student.push("<h4>NAME-"+student_aray[k]+"</h4>");
}
var meme=display_student.join(" ") ;
document.getElementById("display").innerHTML=meme;
}
