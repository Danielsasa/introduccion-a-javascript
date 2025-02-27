document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    if (commentText.trim() !== "") {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = commentText;

        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.appendChild(commentDiv);

        commentInput.value = ""; // Limpia el campo de texto después de agregar el comentario
    }
});