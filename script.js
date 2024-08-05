// Task 1
function js_style() {
    text.style.fontSize = "33px";
    text.style.color = "purple";
    text.style.backgroundColor = "green";

    text1.style.backgroundColor = "yellow";
    text1.style.color = "blue"

}


// Task 2
// Function declaration for getFormvalue
function getFormvalue()
{
  // Retrieving form element with id 'form1'
  var x=document.getElementById("form1");
  // Looping through form elements
  for (var i=0;i<x.length;i++)
  {
    // Checking if element value is not 'Submit'
    if (x.elements[i].value!='Submit')
    {  
      // Logging element value to console
      console.log(x.elements[i].value);
    }  
  }
}


// Task 3
function set_background() {
  let para = document.getElementsByTagName('p');
 
  if (para.length > 1) {
    para[1].style.backgroundColor = "orange";
  }

  if (para.length > 2) {
    para[2].style.backgroundColor = "brown";
  }

}

// Tasl 4
function getAttributes() {
  var p = document.getElementById("svk").href;
  alert("The value of href attribute of the link is : "  +p);

  var q = document.getElementById("svk").hreflang;
  alert("The value of hreflang attribute of the link is : "  +q);

  var r = document.getElementById("svk").rel;
  alert("The value of rel attribute of the link is : "  +r);

  var s = document.getElementById("svk").target;
  alert("The value of target attribute of the link is : "  +s);

  var t = document.getElementById("svk").type;
  alert("The value of type attribute of the link is : "  +t);

}

// Task 5
function insert_Row(){
  var rw = document.getElementById("table1").insertRow(0);
  var ry = rw.insertCell(0);
  ry.innerHTML = "Status";

  var rz = rw.insertCell(1);
  rz.innerHTML = "Active";
}

// Task 6
function changeContent(){
  rn = window.prompt("Input the Row number (0,1,2)", "0");
  cn = window.prompt("Input the Column number (0,1)", "0");
  content = window.prompt("Input the Cell Content");
  var xc = document.getElementById("table1").rows[parseInt(rn,10)].cells;
  xc[parseInt(cn,10)].innerHTML=content;
}

// Task 7
function createTable() {
  ctr = window.prompt("Input the row number", 1);
  ctc = window.prompt("Input the column number", 1);

  for(var k=0; k<parseInt(ctr,10);k++)
  {
    var ctx = document.getElementById("table2").insertRow(k);

  for(var l=0; l<parseInt(ctc,10);l++)
  {
    var cty = ctx.insertCell(l);
    cty.innerHTML="Row-"+k+" Column-"+l;
  }
}
}

// Task 8
function removecolor() {
  var rc = document.getElementById("colorSelect");
  rc.remove(rc.selectedIndex);

}

// Task 9 
function getOptions() {
  var xx=document.getElementById("mySelect");
  var txt1 = "No. of items : ";
  var e;
  h=document.getElementById('mySelect').length;
  txt1=txt1+h;
  for (e=0;e<xx.length;e++)
  {
    txt1=txt1 + "\n" + xx.options[e].text;
  }
  alert(txt1);
}






