
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


function createNEWpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve()
        },2000)
    }) 
}
const user=[
    {lastactivetime:"13th of jan"}
]
function updateLastUserActivityTime(){
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
             user.lastactivetime=new Date().getTime()
       resolve(user.lastactivetime);
        },1000)
      
    })
}

Promise.all([createNEWpost({title:"POST3"}),updateLastUserActivityTime()]).then(([post,user])=>{
    console.log(posts,user);
})
    
    
