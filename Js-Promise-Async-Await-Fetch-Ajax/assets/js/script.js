let body = document.querySelector(".my-body")

let getBtn = document.querySelector(".get-all-datas");


getBtn.addEventListener("click", function () {
    getDatas();
})



async function getDatas() {

    const datas = await fetch("https://jsonplaceholder.typicode.com/comments")

    let result = await datas.json();


    result.forEach(data => {

        body.innerHTML += `<tr>
      <td>${data.postId}</td>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.body}</td>
     
    </tr>`


    });


};