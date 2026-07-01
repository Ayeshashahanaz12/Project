let tasks=JSON.parse(localStorage.getItem("tasks")||"[]");
function save(){localStorage.setItem("tasks",JSON.stringify(tasks));render();}
function addTask(){let t=task.value.trim();if(!t)return;tasks.push({text:t,p:priority.value,d:date.value,c:false});task.value="";date.value="";save();}
function render(){let q=search.value.toLowerCase();list.innerHTML="";tasks.filter(x=>x.text.toLowerCase().includes(q)).forEach((x,i)=>{let li=document.createElement("li");li.innerHTML=`<span class="${x.c?'done':''}">${x.text} (${x.p}) ${x.d}</span><span><button onclick="toggle(${i})">✓</button><button onclick="editTask(${i})">Edit</button><button onclick="del(${i})">Delete</button></span>`;list.appendChild(li);});}
function toggle(i){tasks[i].c=!tasks[i].c;save();}
function del(i){tasks.splice(i,1);save();}
function editTask(i){let n=prompt("Edit task",tasks[i].text);if(n){tasks[i].text=n;save();}}
render();