// Лайки
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let countEl = btn.querySelector('.like-count');
        countEl.textContent = parseInt(countEl.textContent) + 1;
    });
});

// Коментарі
document.querySelectorAll('.post').forEach(post => {
    const input = post.querySelector('.comment-input');
    const addBtn = post.querySelector('.add-comment');
    const list = post.querySelector('.comment-list');

    addBtn.addEventListener('click', () => {
        if(input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;
            list.appendChild(li);
            input.value = '';
        }
    });
});
