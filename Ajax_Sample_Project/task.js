
function btnload(){
    
   let xhr=new XMLHttpRequest();
   xhr.onreadystatechange=function(){
    if (this.status==200) {
        let data=JSON.parse(this.responseText);
        console.log(data);
        addinfo(data);
    } 
   };
   
   xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
   xhr.send();
}
function  addinfo(data) {
    data.forEach(element => {
        let head=document.createElement("tr");
        
        let ele1=document.createElement("td");
        ele1.innerText=element["id"];
        
        let ele2=document.createElement("td");
        ele2.innerText=element["name"];

        let ele3=document.createElement("td");
        ele3.innerText=element["username"];

        let ele4=document.createElement("td");
        ele4.innerText=element["email"];

        let ele5=document.createElement("td");
        ele5.innerText=element["address"]["street"]+",  "+element["address"]["suite"]+",  "+element["address"]["city"]+",  "+element["address"]["zipcode"]+",  "+element["address"]["geo"]["lat"]+",  "+element["address"]["geo"]["lng"]



        head.append(ele1,ele2,ele3,ele4,ele5);
        
        document.querySelector("#tableData").append(head);
    });
}