const buildingData = {
    A: { secretary: 'Alice Smith', chairman: 'Alan Johnson', treasurer: 'Anna Brown', photo: 'images/Profiles/A.jpg' },
    B: { secretary: 'Bob Lee', chairman: 'Ben Davis', treasurer: 'Bella Wilson', photo: 'images/Profiles/B.jpg' },
    C: { secretary: 'Carol White', chairman: 'Charlie Martin', treasurer: 'Cindy Thompson', photo: 'images/Profiles/C.jpg' },
    D: { secretary: 'David Clark', chairman: 'Diana Lewis', treasurer: 'Daniel Hall', photo: 'images/Profiles/D.jpg' },
    E: { secretary: 'Emma Allen', chairman: 'Ethan Young', treasurer: 'Ella Hernandez', photo: 'images/Profiles/E.jpg' },
    F: { secretary: 'Frank King', chairman: 'Fiona Wright', treasurer: 'Fred Lopez', photo: 'images/Profiles/F.jpg' },
    G: { secretary: 'Grace Scott', chairman: 'George Green', treasurer: 'Gina Baker', photo: 'images/Profiles/G.jpg' }
};

const infoPanel = document.getElementById('infoPanel');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

document.querySelectorAll('.building-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.id;
        const data = buildingData[id];

        document.getElementById('panelBuilding').textContent = `Building ${id}`;
        document.getElementById('panelSecretary').textContent = data.secretary;
        document.getElementById('panelChairman').textContent = data.chairman;
        document.getElementById('panelTreasurer').textContent = data.treasurer;
        document.getElementById('panelPhoto').src = data.photo;

        overlay.classList.remove('hidden');
        infoPanel.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    infoPanel.classList.add('hidden');
});
