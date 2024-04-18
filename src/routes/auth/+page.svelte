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
    <div class="card-content">
        <p class="title is-4">LOG IN</p>
        <form on:submit|preventDefault={handleSubmit}>
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input class="input" type="text" bind:value={username} placeholder="Enter your username">
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" bind:value={password} placeholder="Enter your password">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-primary" type="submit">Submit</button>
                </div>
            </div>
        </form>
        <p class="help is-danger">{message}</p>
    </div>
</div>
