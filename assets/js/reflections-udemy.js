document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('reflections-grid');

    fetch('assets/data/reflections-udemy.json')
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
            img.classList.add('reflections-img');
            card.appendChild(img);
        }

        const topic = document.createElement('p');
        topic.classList.add('topic');
        topic.textContent = post.topic;

        const title = document.createElement('h3');
        title.classList.add('reflections-title');
        title.textContent = post.title;

        const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = post.date;

        const reflection = document.createElement('p');
        reflection.classList.add('reflections-p');
        reflection.textContent = post.reflection;

        card.appendChild(topic);
        card.appendChild(title);
        card.appendChild(reflection);
        card.appendChild(date);

        grid.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error loading posts:', error);
    });

});
