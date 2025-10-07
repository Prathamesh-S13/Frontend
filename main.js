// Card hover effect
document.querySelectorAll('.card, .testimonial-card, .latest-card').forEach(card => {
    card.addEventListener('mouseenter', () => { card.style.transform='scale(1.05)'; });
    card.addEventListener('mouseleave', () => { card.style.transform='scale(1)'; });
});

// Fetch latest uploads dynamically
async function fetchLatest() {
    const container = document.getElementById('latestMaterials');
    try {
        const res = await fetch('http://localhost:5000/api/materials');
        const materials = await res.json();
        materials.slice(0,6).forEach(mat => {
            const div = document.createElement('div');
            div.className = 'latest-card';
            div.innerHTML = `<h3>${mat.title}</h3><p>${mat.description || 'No description'}</p><a href="http://localhost:5000${mat.fileUrl}" target="_blank">Read</a>`;
            container.appendChild(div);
        });
    } catch(err) {
        container.innerHTML = '<p>Failed to load latest materials.</p>';
    }
}

fetchLatest();
