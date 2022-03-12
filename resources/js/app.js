require('./bootstrap');

var messages_el =document.getElementById('messages');
const username_input = document.getElementById('username');
const message_input = document.getElementById('message_input');
const message_form =document.getElementById('message_form');
const chats =document.getElementById('allmessage');
const AuthName =document.getElementById('Auth_name').value;

const typ =document.getElementById('ty');


const UserId = parseInt(document.getElementById('user_id').value);


message_form.addEventListener('submit',function (e) {
    e.preventDefault();


    var has_error = false;

    if (username_input.value == "") {
     alert('please Enter Your Usename');
     has_error=true;
    }

    if(message_input.value==""){
        alert('please Enter Message');
        has_error=true;
    }

    if(has_error){
        return;
    }

    const options ={
        method:"post",
        url:'/send-message',
        data:{
            username : username_input.value,
            message : message_input.value,
            user_id : user_id.value,
        }
    }

    axios(options);
});




window.Echo.private('chat.'+UserId)
  .listen('.message',(e)=>{



if(username_input.value==e.username){


    chats.innerHTML+=`
           <li style="color:red;list-style: none;width: 300px;border: 1px solid red;padding: 5px;margin-top: 7px"><strong>${e.username}</strong>: ${e.message}</li>
       `;
}else{


    chats.innerHTML+=`
           <li style="color:green;list-style: none;width: 300px;border: 1px solid green;padding: 5px;margin-top: 7px;margin-left: 110px;"><strong>${e.username}</strong>: ${e.message}</li>
       `;
};



});