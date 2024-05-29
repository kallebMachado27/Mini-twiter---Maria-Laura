function createPost() {
    const postText = document.getElementById('postText').value;
    if (postText === '') return;

    const postContainer = document.getElementById('postContainer');
    const postDiv = document.createElement('div');
    postDiv.className = 'card mb-3';
    postDiv.innerHTML = `
        <div class="card-body">
            <p class="card-text">${postText}</p>
            <button class="btn btn-outline-primary btn-sm" onclick="likePost(this)">Curtir</button>
            <button class="btn btn-outline-danger btn-sm" onclick="deletePost(this)">Excluir</button>
        </div>
    `;
    postContainer.appendChild(postDiv);
    document.getElementById('postForm').reset();
}

function likePost(button) {
    button.classList.toggle('btn-primary');
    button.classList.toggle('btn-outline-primary');
}

function deletePost(button) {
    button.closest('.card').remove();
}