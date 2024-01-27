
const posts=[
    {title:"POST1"},
    {title:"POST2"}
]

function createPost(){
    setTimeout(()=>{
        var output="";
        posts.forEach((post)=>{
          output+=`<li>${post.title}</li>`;
          
        })
        document.body.innerHTML=output;
    },1000)
}


function createNEWpost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    },2000)
}
createNEWpost({title:"POST3"},createPost)