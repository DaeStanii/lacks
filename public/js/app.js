$(document).foundation()

function scrollBottom(el) {
	var div = el + '-last';
	document.getElementById(div).scrollIntoView(true);
}

$('a.sections__item').on('click', function(){
	var sectionToShow = $(this).data('switch');
	$('.sections__item, .channel').removeClass('active');
	$(this).addClass('active');
	$('#'+sectionToShow).addClass('active');
	scrollBottom(sectionToShow);
});


$('.js-emoji').on('click', function(){
	$('.emoji-roll').toggleClass('active');
	setTimeout(function(){
		$('.emoji-roll').removeClass('active')
	}, 2500);
});

// Get all channel elements
// const channels = document.querySelectorAll('.channel__body');
//   // Append the channel input to each channel
// channels.forEach(channel => {
//     const channelInput = document.getElementById('channelInput');
//     channel.appendChild(channelInput.cloneNode(true));
// });

// const getLoggedInUser =  async () => {
// 	const loggedInUser = await fetch('/api/currentuser');
// 	return loggedInUser;
// };  

// const loggedInUser = getLoggedInUser();

// function addComment() {
//     const commentInput = document.getElementById('commentInput');
//     const commentText = commentInput.value;
//     if (commentText.trim() !== '') {
//         const commentDiv = document.createElement('div');
//         commentDiv.classList.add('comment');
//         commentDiv.innerHTML = `
//             <div class="message">
//             <div class="message__profile"><img src="/images/lacks logo.jpg" alt="Profile Picture"/></div>
//             <div class="message__content"
//             <div class="message__sender"><a>${loggedInUser.username}</a><span class=" time js-time"></span></div>
//             <div class="message__text">${commentText}<div>
//             </div>
//             </div>
//         `;
//         const commentsContainer = document.getElementById('comments');
//         commentsContainer.appendChild(commentDiv);
//         // Clear the input after adding a comment
//         commentInput.value = '';
//     }
// };