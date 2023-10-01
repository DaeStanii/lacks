//commented all this out until we know which ids need to go in lines 5, 12, 14
//uncomment all this once that has been pushed

//need to add the post button id
const postCommentButton = document.querySelector('');



postCommentButton.addEventListener('click', async (event) => {
    event.preventDefault();
    //need to add the id of the comment text box
    const commentText =  document.querySelector('').value.trim();
    //need to add the id/class of whatever thread/channel we are posting in
    const parentPost = document.querySelector('').value.trim();

    const sendComment = await fetch('/api/comment', {
        method:'POST',
        body: JSON.stringify({
            comment_content: commentText,
            parent_post: parentPost,
            user_id: currentUser.body
        })
    });

    if (sendComment.status == 400) {
        console.log('400 error has occurred: \n');
        const response = await sendComment.json();
        console.log(response.message);
    } else if (sendComment.status == 500) {
        console.log('500 error has occurred: \n');
        const response = await sendComment.json();
        console.log(response);
    } else {
        const response = await sendComment.json();
        console.log('comment saved to db!');
    }
});