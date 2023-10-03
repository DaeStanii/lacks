//commented all this out until we know which ids need to go in lines 5, 12, 14
//uncomment all this once that has been pushed

//need to add the post button id
const postCommentButton = document.querySelector('#buttonComment');

const getLoggedInUser2 =  async () => {
	const loggedInUser = await fetch('/api/currentuser');
    const response = loggedInUser.json(loggedInUser)
	return response;
};  


postCommentButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const loggedInUser2 = await getLoggedInUser2();
    
    const commentText =  document.querySelector('#commentInput').value.trim();
    
    console.log(commentText);
    if (commentText !== '') {
        console.log(loggedInUser2);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <div class="message">
            <div class="message__profile"><img src="/images/lacks logo.jpg" alt="Profile Picture"/></div>
            <div class="message__content"
            <div class="message__sender"><a>${loggedInUser2.username}</a><span class=" time js-time"></span></div>
            <hr>
            <div class="message__text">${commentText}<div>
            </div>
            </div>
        `;
        const commentsContainer = document.getElementById('comments');
        commentsContainer.appendChild(commentDiv);
        // Clear the input after adding a comment
        //commentInput.value = '';
    }

    //need to add the id/class of whatever thread/channel we are posting in
    //const parentPost = document.querySelector('.active').getAttribute('data-switch');

    // const sendComment = await fetch('/api/comment', {
    //     method:'POST',
    //     body: JSON.stringify({
    //         comment_content: commentText,
    //         parent_post: parentPost,
    //         user_id: loggedInUser2.user_id
    //     }),
    //     headers: { 'Content-Type': 'application/json' },
    // });

    // if (sendComment.status == 400) {
    //     console.log('400 error has occurred: \n');
    //     const response = await sendComment.json();
    //     console.log(response.message);
    // } else if (sendComment.status == 500) {
    //     console.log('500 error has occurred: \n');
    //     const response = await sendComment.json();
    //     console.log(response);
    // } else {
    //     const response = await sendComment.json();
    //     console.log('comment saved to db!');
    // }
});