

document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    if (commentText.trim() !== "") {
        const commentDiv = document.createElement('div'); // Crea un nuevo div para el comentario
        commentDiv.className = 'comment';

        const commentContent = document.createElement('p'); // Crea un nuevo párrafo para el contenido del comentario
        commentContent.textContent = commentText;

        const commentTime = document.createElement('time'); // Crea un nuevo elemento de tiempo para la fecha y hora del comentario
        const now = new Date();
        commentTime.textContent = now.toLocaleString();

        const deleteButton = document.createElement('button'); // Crea un nuevo botón para eliminar el comentario
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            commentDiv.remove();
        });

        commentDiv.appendChild(commentContent); // Agrega los elementos al div del comentario
        commentDiv.appendChild(commentTime); 
        commentDiv.appendChild(deleteButton); 

        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.appendChild(commentDiv);

        commentInput.value = "";
    }
});