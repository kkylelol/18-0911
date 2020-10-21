function backcouserlist() {
    document.location.replace("courselist.html")
}
function backcouseradd() {
    document.location.replace("courseadd.html")
}
function backcouserupdate() {
    document.location.replace("courseupdate.html")
}
function backcouserinfo() {
    document.location.replace("courseinfo-1.html")
}
function getclassname(){
    let classname = document.getElementById("classname").value;
    console.log(classname);
}
function getclassnumber() {
   let  classnumber = document.getElementById("classnumber").value;
   console.log(classnumber);
}
function getclassstructural() {
    let radio1 = document.getElementById("kemu1");
    let radio2 = document.getElementById("kemu2");
    let radio3 = document.getElementById("kemu3");
    let radio4 = document.getElementById("kemu4");
    let radio5 = document.getElementById("kemu5");
    if (radio1.checked == true){
        console.log(radio1.value);
    }
    if (radio2.checked == true){
        console.log(radio2.value);
    }
    if (radio3.checked == true){
        console.log(radio3.value);
    }
    if (radio4.checked == true){
        console.log(radio4.value);
    }
    if (radio5.checked == true){
        console.log(radio5.value);
    }
}
function getmajor() {
  let majorlist = document.getElementById("major-list");
  let majorlistoptions = majorlist.options;
  let majorlistindex = majorlistoptions.selectedIndex;
  let majorlisttext = majorlistoptions[majorlistindex].text;
  console.log(majorlisttext);
}
function gethours() {
 let hours = document.getElementById("hours").value;
 console.log(hours);
}
function getcredits() {
    let credits = document.getElementById("credits").value;
    console.log(credits);
}
function getassessstyle() {
    let assess1 = document.getElementById("assess1");
    let assess2 = document.getElementById("assess2");
    let assess3 = document.getElementById("assess3");
    if (assess1.checked == true){
        console.log(assess1.value);
    }
    if (assess2.checked == true){
        console.log(assess2.value);
    }
    if (assess3.checked == true){
        console.log(assess3.value);
    }
}
function getclasskey() {
 let classkey = document.getElementById("classkey");
 let classkeytext = classkey.value;
 console.log(classkeytext);
}