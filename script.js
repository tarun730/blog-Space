let postArray = []
const formTitle = document.getElementById("TITLE")
    const formbody = document.getElementById("BODY")
function renderPost() {
    let html = ""
    for (const i of postArray) {
        html += `<h1>${i.title}</h1>
    <p>${i.body} </p>
    <hr> `
    }
    document.getElementById("show").innerHTML = html
}


let a=Math.floor( Math.random()*30)

fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
        
       
        postArray = data.posts.slice(a, parseInt( a)+5)
        
        renderPost()

    }
    );

document.getElementById("new-post").addEventListener("submit", function (e) {
    e.preventDefault()
    postTitle=formTitle.value
    postbody=formbody.value
    let data = {
        title: postTitle,
        body: postbody
    }
    console.log(data)
    postArray.unshift(data)
    renderPost()

    formTitle.value=""
    formbody.value=""
})

