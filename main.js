const button=document.querySelector("button");
const table=document.querySelector("table");
const fetchUser=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    // console.log(data);
    data.forEach((todo)=>{
        let tr=document.createElement("tr");
        let th1=document.createElement("td");
        let th2=document.createElement("td");
        let th3=document.createElement("td");
        th1.innerText=todo.name;
        th2.innerText=todo.email;
        th3.innerHTML=todo.phone;
        // console.log(th1);
        // console.log(th2);
        // console.log(th3);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        table.appendChild(tr);
    })
    
}
button.addEventListener("click",fetchUser)