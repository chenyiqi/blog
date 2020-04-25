$(function() {
    $('.register-btn').on('click', function() {
        $.ajax({
            url: '/api/user/register',
            data: {
                username: $('[name="username"]').val(),
                password: $('[name="password"]').val(),
                repassword: $('[name="repassword"]').val()
            },
            type: 'post',
            dataType: 'json',
            success: function(res) {
                console.log(res);
            }
        })
    })
});