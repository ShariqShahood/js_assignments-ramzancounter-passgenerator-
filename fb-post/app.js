
function setBackground() {
    var postBackground = document.getElementById('post-background');
    postBackground.style.backgroundImage = 'url(' + event.target.src + ')'
    // console.log(event.target)

}
function changeColor() {
    var postBackground = document.getElementById('post-background');
    postBackground.style.color = event.target.value;
    // console.log(event.target.value)
}
function changeSize() {
    var postBackground = document.getElementById('post-background');
    postBackground.style.fontSize = event.target.value + "px";
    // console.log(event.target.value)
}
function changeStyle() {
    var postBackground = document.getElementById('post-background');
    var type = event.target.innerText;
    if (type === "B") {
        if (postBackground.style.fontWeight === "bold") {
            postBackground.style.fontWeight = 'normal';
            event.target.style.color = 'black';
        }
        else {
            postBackground.style.fontWeight = 'bold';
            event.target.style.color = 'red';

        }
    }
    else if (type === "𝐼") {
        if (postBackground.style.fontStyle === "italic") {
            postBackground.style.fontStyle = 'normal';
            event.target.style.color = 'black';

        }
        else {
            postBackground.style.fontStyle = 'italic';
            event.target.style.color = 'red';

        }
    }
    else if (type === "U") {
        if (postBackground.style.textDecoration === "underline") {
            postBackground.style.textDecoration = 'none';
            event.target.style.color = 'black';

        }
        else {
            postBackground.style.textDecoration = 'underline';
            event.target.style.color = 'red';

        }
    }

}
function cut() {

    var alls = document.getElementById('all')

    alls.style.display = 'none';
    document.write("<center><h1>" + 'Refresh the page..' + "</h1></center>")

}
function enterComment() {
    var com = document.getElementById('comment-section');
    com.style.display = 'contents';
}
function share() {
    document.write("<h1>" + "Share Succesfully.." + "</h1>");
}
function like(){
    var lik = document.getElementById('liking');
    event.target.style.color='red';
}
function dislike(){
    var likee = document.getElementById('liking');
    event.target.style.color='grey';
}
function createPost() {
    var item = document.getElementById('item');
    var head = document.getElementById('head');
    var head2 = document.getElementById('head2');
    var react = document.getElementById('rc');
    var react2 = document.getElementById('rc2');
    var react3 = document.getElementById('rc3');


    item.style.display = 'none';
    head.style.display = 'none';
    head2.style.display = 'contents';
    react.style.display = 'contents';
    react2.style.display = 'contents';
    react3.style.display = 'contents';






}
function setEmoji() {
    var postBackground = document.getElementById('post-background')
    postBackground.value += event.target.value;
    // console.log(event.target.value)
}