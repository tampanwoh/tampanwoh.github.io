function render(data) {
    var html = "<div id='commentBox'><span>"+data.name+"</span><div id='commentData'><p>"+data.body+"</p><div class='clear'></div></div>";
    $('#panel').append(html);
}

$(document).ready(function() {
    
    var comment = []; 

    if(!localStorage.commentData){
        localStorage.commentData = [];
    } else {
        comment = JSON.parse(localStorage.commentData);
    }


        for(var i=0;i<comment.length;i++) {
            render(comment[i]);
        }

        $('#addComment').click(function(){
            var addObj = {
                "name": $('#name').val(),
                "body": $('#fillComment').val()
            };
            comment.push(addObj);
            localStorage.commentData = JSON.stringify(comment);
            render(addObj);
            $('#name').val('');
            $('#fillComment').val('')
        });
});