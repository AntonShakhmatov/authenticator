const showEditProfile = () => `
<div>
    <h2>Send the message</h2>
    <i class="task-desc">Get token for profile</i>
    <div class="method">
        <span class="method-get">POST</span><b>/sender</b>
    </div>
    <b>User ma být autorizován</b>  
    <div class="desc-block request-block">
        <h3>Request:</h3>
        <b>1. Send your text to telegram</b>    

        <div class="desc-block desc-block-header">
        <h3>Body:</h3>
        <div class="header-param">
        <h4>Zadejte svůj text</h4>
        </div>
        <code>
        {
            "text": "Zde zadej svou zprávu"
        }
        </code> 
        </div>
    </div>

    <b>1. Zpráva byla odeslána</b><br>
    <h4 class="status-header">Status:</h4><i class="status status-success">200 Success</i>  
    <code>
    {
        "text": "Zde zadej svou zprávu"
    }
    </code>    
    <b>2. Incorrect data</b><br>
    <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 input data incorrect</i> 
    <code>
    {
    "error": "incorrect data"
    }
    </code>
    </div>
    </div>`;
