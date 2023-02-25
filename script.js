// tableData = [
//     {id:1, student_name:"Avi", student_roll:"2020500", subject:"english", marks:95, markedBy:"teacher"}
   
//   ];
var table_data = [];
  var id =0;
  var flag = true;
  var id_arr = [];
  function Add_A_Row()
  {
    //alert("hihhhhhhhhhh")
    let table = document.getElementById("tableBody");



    // We are adding at the end
    let row = document.createElement("tr"); 
   
    id++;
    let c1 = document.createElement("td");
    c1.innerText = id;
    row.appendChild(c1);

   

    // Create table cells
    for(var i=0;i<5;i++)
    {
        let c2 = document.createElement("td");
        c2.setAttribute('contenteditable','true');
        let x = document.createElement("input");
        x.setAttribute("type", "text");
       // x.setAttribute("value","hiii");
        c2.appendChild(x);
    
        table_data[i] = c2;
    }

     table_data[4].setAttribute("type","email");
    for(var i=0;i<5;i++)
    {
       row.appendChild(table_data[i]);
    }

     let c3 = document.createElement("td");

    //  create button
     let btn = document.createElement("input");
     btn.setAttribute("type", "button");
     btn.value = "save";
     btn.style.backgroundColor = "green";
     btn.setAttribute("id",id);

    //  adding btn
     c3.appendChild(btn);
     row.appendChild(c3);
     row.setAttribute("id",id.toString());
  
    
     table.appendChild(row)
     btn.addEventListener("click",save_Element);
  }

  function save_Element()
  {
//     // alert("huijk");
//     console.log(this.id);
//    // console.log(document.getElementById('this.id'));
//     console.log(table_data);
   
//       var a = table_data[0].innerHTML;
     
     
      
//       console.log(a + " " + a.value);


 var tr = document.getElementById(this.id);
        
  

// console.log(tr,this.id,tr.length, tr.innerHTML.charAt(0),table_data);
// console.(log(table_data[0].childNodes[0].value);
console.log(tr);

for(var i=0;i<id_arr.length;i++)
{
   if(this.id == id_arr[i])
   {
     flag = false;
   }
}

if(flag)
{
    console.log(table_data,tr);
    for(var i=1;i<=5;i++)
    {
        var a =table_data[i-1].childNodes[0].value;
        if(i == 4 )
        {
            if(!isNaN(a)){
                tr.childNodes[i].textContent = a;
            }
            else{
                tr.childNodes[i].textContent = "enter a number";
            }
            
            continue;
        }
        if(i==5)
        {
           var check = String(a)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
            if (check)
            {
                tr.childNodes[i].textContent = a;
            }
            else{
                tr.childNodes[i].textContent = "enter email";
            }
        }
       
        
        tr.childNodes[i].textContent = a;
    }
  
}
else{
    for(var i=1;i<=5;i++)
    {
        var a =table_data[i-1].innerText;
        tr.childNodes[i].textContent = a;
    }
    console.log(flag);
}
 
id_arr.push(this.id);


    
    
  }



 
  