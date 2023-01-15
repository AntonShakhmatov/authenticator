<?php

function route($method, $urlList, $requestData, $ipAllowed)
{
    if($method == "POST")
    {
        global $Link;
        switch($urlList[1]){
            case "login":
                $login = $requestData->body->login;
                $pass = hash("sha1", $requestData->body->password);

                $user = $Link->query("SELECT id FROM users WHERE login = '$login' AND password = '$pass'")->fetch_assoc();
                if(!is_null($user))
                {
                    $token = bin2hex(random_bytes(32));
                    $userId = $user['id'];
                    $tokenInsertResult = $Link->query("INSERT INTO tokens(token, userId) VALUES('$token', '$userId')");
                    if(!$tokenInsertResult)
                    {
                        setHTTPStatus("400", "input data incorrect");
                    }
                    else
                    {
                        echo json_encode(['token' => $token]);
                    }
                }
                    else
                    {
                        setHTTPStatus("400", "input data incorrect");
                    }

                    break;
                    case "logout":
                    break;
                    default:
                        setHTTPStatus("404", "There is no such path as 'user/$urlList[1]'");
                    break;
                }
        }
        else
        {
            setHTTPStatus("401", "Change method for POST'");
        }
    }