fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => displayPost(data))

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML= `
            <h4>post-id:${post.id} </h4>
            <h3>post-title:${post.title} </h3>
            <p>description: ${post.body} </p>

        `;
        postContainer.appendChild(postDiv);
    }
}
function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
    
}