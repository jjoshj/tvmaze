function formReset() {
  document.querySelector(".search-tab").value="";
  document.querySelector(".user-list").remove();
}
function buttenReset() {
  document.querySelector(".search-tab").value="";
  
}
async function searchname(){
   const title=  document.querySelector(".search-tab").value;
 
  console.log( '.name' , title );
    fetch(`https://api.tvmaze.com/search/shows?q=${title}` ,
    {
      method: "GET"
    }
  ) 
      .then((data) => {
     
      return data.json();
    })
    .then((users) => loadUsers(users));
   
     buttenReset();
 }


 function loadUsers(users) {
const userList =document.createElement("div");
userList.className="user-list"
users.forEach((user)=>{
  const userContainer = document.createElement("div");
  userContainer.className="mainplan";
  
  userContainer.innerHTML=`
  <div class= "plan1">
  <div class="plan">
    <h1><b>Title:</b>${user.show.name}</h1>
  <img src="${user.show.image.medium}" />  
  <p><b>Language:</b>${user.show.language}</p>
   
    <p><b>Date:</b>${user.show.premiered}</p>
        <p><b>Total Time:</b>${user.show.schedule.time}</p>
           <p><b>Genre:</b>${user.show.genres}</p>
  
  <p><b>Show Id:</b>${user.show.id}</p>
      <p><b>Summary:</b>${user.show.summary}</p>
      <p><b>Score:</b>${user.score}</p>
      </div></div>
  `;
  
  userList.append(userContainer);
})
document.body.append(userList);
 
}
searchname();