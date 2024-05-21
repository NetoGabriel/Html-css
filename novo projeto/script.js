const descriptions = [
    "Especialista em Desenvolvimento Web com 10 anos de experiência.",
    "Mentor em Marketing Digital com foco em redes sociais e SEO.",
    "Consultor de Negócios com vasta experiência em startups e inovação.",
    "Coach de Carreira, ajudando profissionais a atingirem seus objetivos."
];

function showDescription(index) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, idx) => {
        const description = box.querySelector('.description');
        if (idx === index) {
            description.textContent = descriptions[index];
        } else {
            description.textContent = "Clique para mais informações";
        }
    });
}
