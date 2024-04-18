<script>
    let username = ''; 
    let password = '';
    let message = '';

    const handleSubmit = async () => {
        const response = await fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ username, password, message }) 
        });

        if (response.ok) {
            const data = await response.json(); 
            message = data.message; 
        } else {
            console.error('Error:', response.statusText); 
        }
    }
</script>

<div class="card is-flex">
    <p class="card-header-title">LOG IN</p>
    <form on:submit|preventDefault={handleSubmit}>
        <label>
            Username:
            <input class='input' type="text" bind:value={username} />
        </label>
        <label>
            Password:
            <input class='input' type="password" bind:value={password} />
        </label>
        <button class='button' type="submit">Submit</button>
    </form>
    
    <p>{message}</p>
</div>
