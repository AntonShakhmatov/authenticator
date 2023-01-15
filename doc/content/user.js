const showSession = () => `
<div>
    <h2>User</h2>
    <i class="task-desc">
    Přidat nového uživatele</i>
    <div class="method"><span class="method-post">POST</span><b>/user</b></div>
    <div class="desc-block desc-block-header">
        <h3>Headers:</h3>
        <p>Content-Type: application/json</p>
    </div>
    <div class="desc-block desc-block-header">
        <h3>Body:</h3>
        <h5>("chat_id" <u>pro uzivatele</u>, "chanel_id" <u>pro skupinu</u>)</h5>
        <div class="header-param">
        <h4>chat_id ||</h4><h4> chanel_id</h4><span>*</span><i>Pro odesílání zpráv</i>
        </div>
        <div class="header-param">
        <h4>name</h4>
        </div>
        <div class="header-param">
            <h4>login/email(unique)</h4><span>*</span><i>Pro autorizaci</i>
        </div>
        <div class="header-param">
            <h4>password(will be hashed)</h4><span>*</span><i>Pro autorizaci</i>
        </div>
        <code>
        {
            "chat_id"(int): 123,
            "name": "Antocha"
            "email": "test@test.com",
            "password": "123"
        }
        </code> 
        </div>
    </div>
    <div class="desc-block response-block">
        <h3>Response:</h3>
        <b>1. Relace byla úspěšně vytvořena. Přidáno do databáze</b> 
        <h4 class="status-header">Status:</h4><i class="status status-success">200 Doplneno</i>  
<code>
    {
        "id": "1",
        "chat_id": "123",
        "name": "Antocha",
        "login": "test@test.com",
        "password": "40bd001563085fc35165329ea1ff5c5ecbdbbeef"
    }
</code> 
    <b>2. Bad Request</b>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
<code>{
    "error": "authentication failed"
}</code>
    <b>3. Unique login</b>
    <h4 class="status-header">if login existing:</h4>
    <code>
    {
        "error": "Login existing"
    }
    </code>
        </div>
    </div>`;
