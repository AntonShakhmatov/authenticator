const showProfile = () => `
<div>
    <h2>Login</h2>
    <i class="task-desc">Get token for profile</i>
    <div class="method">
        <span class="method-get">POST</span><b>/auth/login</b>
    </div>
    <div class="desc-block request-block">
        <h3>Request:</h3>
        <b>1. Post user data</b> 

        <div class="desc-block desc-block-header">
        <h3>Body:</h3>
        <div class="header-param">
        <h4>login/email</h4>
        </div>
        <div class="header-param">
            <h4>password</h4>
        </div>
        <code>
        {
            "chat_id": 123,
            "name": "Antocha"
            "email": "test@test.com",
            "password": "123"
        }
        </code> 
        </div>
    </div>

    <b>1. You are loged-in</b><br>
    <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>  
    <code>
    {
    "token": "ac1722c07a9fe7cc0e0f746d1ce5f11199d415266050425112cae7a970d26d79"
    }
    </code>    
    <b>2. Incorrect data</b><br>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 input data incorrect</i> 
    <code>
    {
    "error": "incorrect method"
    }
    </code>
    </div>
    </div>`;