<?php

function route($method, $urlList, $requestData, $ipAllowed)
{
    global $Link;
    $token1 = "5927059581:AAGf-oKJD9qPupvP_nsyt9OABZhwcoRVTvA";
    switch($method){

        case 'POST':

        $token = substr(getallheaders()['Authorization'], 7);
        $userFromToken = $Link->query("SELECT userId FROM tokens WHERE token = '$token'")->fetch_assoc();
        if(!is_null($userFromToken))
        {
            $userId = $userFromToken['userId'];
            $user = $Link->query("SELECT chat_id FROM users WHERE id = '$userId'")->fetch_assoc();
            $chat_id = $user['chat_id'];
            $text = $requestData->body->text;
            $fp=fopen("https://api.telegram.org/bot{$token1}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}","r");
            return $fp;    

            if(!$fp)
            {
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
            setHTTPStatus("401", "Unauthorized");
        }

        break;

        default:

        break;
    }
}