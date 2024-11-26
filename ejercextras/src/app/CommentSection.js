/**
 Crea un componente CommentSection que 
 permita a los usuarios agregar comentarios 
 a una publicación. Los comentarios deben tener un nombre de usuario 
 y un texto. Los usuarios también pueden eliminar 
 sus propios comentarios.
 */
 import { useState } from "react";

 export default function CommentSection() {
   const [comments, setComments] = useState([]);
   const [newComment, setNewComment] = useState("");
   const [username, setUsername] = useState("");
 
   const handleAddComment = () => {
     if (username && newComment) {
       setComments([
         ...comments,
         { id: comments.length + 1, username, text: newComment },
       ]);
       setNewComment("");
     }
   };
 
   const handleDeleteComment = (id) => {
     setComments(comments.filter((comment) => comment.id !== id));
   };
 
   return (
     <div>
       <h2>Comentarios</h2>
       <input
         type="text"
         placeholder="Nombre"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
       />
       <textarea
         placeholder="Escribe un comentario..."
         value={newComment}
         onChange={(e) => setNewComment(e.target.value)}
       />
       <button onClick={handleAddComment}>Agregar Comentario</button>
 
       <ul>
         {comments.map((comment) => (
           <li key={comment.id}>
             <strong>{comment.username}</strong>: {comment.text}
             <button onClick={() => handleDeleteComment(comment.id)}>Eliminar</button>
           </li>
         ))}
       </ul>
     </div>
   );
 }
 