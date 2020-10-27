//按钮跳转到列表页
function backcouserlist() {
    document.location.replace("courselist.html")
}
//按钮跳转到注册
function backcouseradd() {
    document.location.replace("courseadd.html")
}
//按钮跳转到修改页
function backcouserupdate() {
    document.location.replace("courseupdate.html")
}
//按钮跳转到详情页
function backcouserinfo() {
    document.location.replace("courseinfo-1.html")
}
//注册页  获取输入各个控件的值，输出到控制台
function getclassname(){
    let classname = document.getElementById("classname").value;
    console.log(classname);
}
function getclassnumber() {
   let  classnumber = document.getElementById("classnumber").value;
   console.log(classnumber);
}
function getclassstructural() {
    let radio1 = document.getElementsByName("kemu-major");
    for (let i=0;i<radio1.length;i++){
        if (radio1[i].checked == true){
            console.log(radio1[i].value);
        }
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
    let assess1 = document.getElementsByName("kaoshimoshi");
    for (let i=0;i<assess1.length;i++){
        if (assess1[i].checked == true){
            console.log(assess1[i].value);
        }
    }
}
function getclasskey() {
 let classkey = document.getElementById("classkey");
 let classkeytext = classkey.value;
 console.log(classkeytext);
}
//修改页  数据回填 （假定后台已经获取到数据）
function updata() {
    document.getElementById("updatename").value = "Web程序设计基础";
    document.getElementById("updatenumber").value = "1112L1019";
    let major = document.getElementsByName("kemu-major");
    major[3].checked = true;
    document.getElementById("updatehours").value = "48";
    document.getElementById("updatecredits").value = "3.0";
    let majorstyle = document.getElementsByName("kaoshistyle");
    majorstyle[0].checked = true;
    document.getElementById("updatejieshao").value = "这是Web程序设计基础的课程介绍";
}
//修改页 点击保存 获取输入各个控件的值，输出到控制台
function getafterdata() {
    let classname = document.getElementById("updatename").value;
        console.log(classname);
    let classnumber = document.getElementById("updatenumber").value;
        console.log(classnumber);
    let major = document.getElementsByName("kemu-major");
    for (let i=0;i<major.length;i++) {
        if (major[i].checked == true) {
            console.log(major[i].value);
        }
    }
    let hours = document.getElementById("updatehours").value;
        console.log(hours);
    updatecredits
    let credits = document.getElementById("updatecredits").value;
        console.log(credits);
    let majorlist = document.getElementById("updatemajor");
    let majorlistoptions = majorlist.options;
    let majorlistindex = majorlistoptions.selectedIndex;
    let majorlisttext = majorlistoptions[majorlistindex].text;
        console.log(majorlisttext);
    let assess1 = document.getElementsByName("kaoshistyle");
    for (let i=0;i<assess1.length;i++){
        if (assess1[i].checked == true){
            console.log(assess1[i].value);
        }
    }
    let textneirong = document.getElementById("updatejieshao").value;
        console.log(textneirong);
}
//列表页 删除当前表格行
function delrows(obj) {
 let delrow = document.getElementById("tablelist").lastChild;
 let trow = obj.parentNode.parentNode;
 delrow.removeChild(trow);
}