<?php

function route($method, $urlList, $requestData, $ipAllowed)
{
    echo $ipAllowed->isAllowed()->whitelist;
    global $Link;
    switch($method){
        case 'GET':
            $token = substr(getallheaders()['Authorization'], 7);

            $userFromToken = $Link->query("SELECT userId FROM tokens WHERE token = '$token'")->fetch_assoc();
            if(!is_null($userFromToken))
            {
                $userId = $userFromToken['userId'];
                $user = $Link->query("SELECT * FROM users WHERE id = '$userId'")->fetch_assoc();
                echo json_encode($user);
            }
                else
                {
                    echo "400: input data incorrect";
                }

        break;

        case 'POST':
        $login = $requestData->body->login;
        $user = $Link->query("SELECT id FROM users WHERE login = '$login'")->fetch_assoc();

        if(is_null($user))
        {
            $chat_id = $requestData->body->chat_id;
            $name = $requestData->body->name;
            $login = $requestData->body->login;
            $password = hash("sha1", $requestData->body->password);
            $userInsertResult = $Link->query("INSERT INTO users(chat_id, name, login, password) VALUES('$chat_id', '$name', '$login', '$password')");

            if(!$userInsertResult)
            {
                //400
                setHTTPStatus("400", "Bad Request");
            }
            else
            {
                setHTTPStatus("200", "Success");
            }

            echo json_encode($requestData);
        }
        else
        {
            //exit
            echo "Login existing";
        }

        if($ipAllowed)
        {
            echo " Vaše ip je blokována";
        }

        break;

        default:

        break;
    }
}