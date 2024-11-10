document.addEventListener('DOMContentLoaded', function() {
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        card.addEventListener('click', function() {
            const pageUrl = this.getAttribute('data-page');
            window.location.href = pageUrl;
        });
    });
});