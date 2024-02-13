'use strict';


// answer
document.querySelector('.submitt').addEventListener('click', function (event) {
	event.preventDefault();

	const finalAnswer = Number(document.querySelector('.answer').value);
	if (finalAnswer === 43) {
    
    window.location.href = 'main3 new.html';
    ;
  } else {
    document.querySelector('.message').textContent ='❗ በትክክል አልተመለሰም: እንደገና ይሞክሩ!';
  };
});
//hint
document.querySelector('.hint').addEventListener('click', function() {
document.querySelector('.message2').textContent = 'ቁጥሩ ከ 35 እስከ 50 ነው';
});