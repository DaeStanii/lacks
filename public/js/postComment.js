//commented all this out until we know which ids need to go in lines 5, 12, 14
//uncomment all this once that has been pushed

// //need to add the post button id
// const postCommentButton = document.querySelector('');



// postCommentButton.addEventListener('click', async (event) => {
//     event.preventDefault();
//     //need to add the id of the comment text box
//     const commentText =  document.querySelector('').value.trim();
//     //need to add the id/class of whatever thread/channel we are posting in
//     const parentPost = document.querySelector('').value.trim();

//     const sendComment = await fetch('/api/comment', {
//         method:'POST',
//         body: JSON.stringify({
//             comment_content: commentText,
//             parent_post: parentPost,
//             user_id: currentUser.body
//         })
//     });
//     const response = await sendComment.json();
// });