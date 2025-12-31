document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('reflections-grid');

    fetch('assets/data/reflections-posts.json')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Image (if there is one...)
        if (post.photo) {
            const img = document.createElement('img');
            img.src = post.photo;
            img.alt = post.title;
            card.appendChild(img);
        }

        const topic = document.createElement('span');
        topic.classList.add('topic');
        topic.textContent = post.topic;

        const title = document.createElement('h3');
        title.textContent = post.title;

        const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = post.date;

        const reflection = document.createElement('p');
        reflection.textContent = post.reflection;

        card.appendChild(topic);
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(reflection);

        grid.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error loading posts:', error);
    });

});
