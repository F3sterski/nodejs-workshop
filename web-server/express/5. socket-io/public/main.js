$(function() {
    const TYPING_TIMER_LENGTH = 400; // ms


    const $window = $(window);
    const $usernameInput = $('.usernameInput');
    const $messages = $('.messages');
    const $inputMessage = $('.inputMessage');

    const $loginPage = $('.login.page');
    const $chatPage = $('.chat.page');


    let username;
    let connected = false;
    let typing = false;
    let lastTypingTime;
    let $currentInput = $usernameInput.focus();

    const socket = io();

    function setUsername () {
        username = $usernameInput.val().trim();

        // If the username is valid
        if (username) {
            $loginPage.hide();
            $chatPage.show();
            $loginPage.off('click');
            $currentInput = $inputMessage.focus();

            socket.emit('add-user', username);
        }
    }

    function cleanInput(text){
        return $('<div/>').text(text).html();
    }


    function sendMessage () {
        var message = $inputMessage.val();
        // Prevent markup from being injected into the message
        message = cleanInput(message);
        // if there is a non-empty message and a socket connection
        if (message && connected) {
            $inputMessage.val('');
            addChatMessage({
                username: username,
                message: message
            });


            socket.emit('new-message', message);
        }
    }


    function log (message, options) {
        var $el = $('<li>').addClass('log').text(message);
        addMessageElement($el, options);
    }


    function addChatMessage (data) {

        var $typingMessages = getTypingMessages(data);
        if ($typingMessages.length !== 0) {
            $typingMessages.remove();
        }

        var $usernameDiv = $('<span class="username"/>')
            .text(data.username);

        var $messageBodyDiv = $('<span class="messageBody">')
            .text(data.message);

        var typingClass = data.typing ? 'typing' : '';
        var $messageDiv = $('<li class="message"/>')
            .data('username', data.username)
            .addClass(typingClass)
            .append($usernameDiv, $messageBodyDiv);

        addMessageElement($messageDiv);
    }

    function addChatTyping (data) {
        data.typing = true;
        data.message = 'is typing';
        addChatMessage(data);
    }

    function removeChatTyping (data) {
        getTypingMessages(data).fadeOut(function () {
            $(this).remove();
        });
    }

    function addMessageElement (el) {
        var $el = $(el);
        $messages.append($el);
        $messages[0].scrollTop = $messages[0].scrollHeight;
    }


    function updateTyping () {
        if (connected) {
            if (!typing) {
                typing = true;
                socket.emit('typing');
            }
            lastTypingTime = (new Date()).getTime();

            setTimeout(function () {
                var typingTimer = (new Date()).getTime();
                var timeDiff = typingTimer - lastTypingTime;
                if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
                    socket.emit('stop-typing');
                    typing = false;
                }
            }, TYPING_TIMER_LENGTH);
        }
    }

    function getTypingMessages (data) {
        return $('.typing.message').filter(function (i) {
            return $(this).data('username') === data.username;
        });
    }

    $window.keydown(function (event) {
        if (!(event.ctrlKey || event.metaKey || event.altKey)) {
            $currentInput.focus();
        }

        if (event.which === 13) {
            if (username) {
                sendMessage();
                socket.emit('stop-typing');
                typing = false;
            } else {
                setUsername();
            }
        }
    });

    $inputMessage.on('input', function() {
        updateTyping();
    });


    $loginPage.click(function () {
        $currentInput.focus();
    });

    $inputMessage.click(function () {
        $inputMessage.focus();
    });

    socket.on('login', function (data) {
        connected = true;
        var message = `Witaj na czacie: ${username}. Liczba użytkowników: ${data.numUsers}`;
        log(message);
    });

    socket.on('new-message', function (data) {
        addChatMessage(data);
    });


    socket.on('user-joined', function (data) {
        log(`Do czatu dołączył ${data.username}`);
    });

    socket.on('user-left', function (data) {
        log(`Użytkownik ${data.username} opuścił czat`);
        removeChatTyping(data);
    });


    socket.on('typing', function (data) {
        addChatTyping(data);
    });


    socket.on('stop-typing', function (data) {
        removeChatTyping(data);
    });

    socket.on('disconnect', function () {
        log('Zostałeś odłączony od serwera');
    });

    socket.on('reconnect', function () {
        log('Zostałeś ponownie połączony z serwerem');
        if (username) {
            socket.emit('add-user', username);
        }
    });

    socket.on('reconnect_error', function () {
        log('Próba połączenia nie powiodła się');
    });

});
