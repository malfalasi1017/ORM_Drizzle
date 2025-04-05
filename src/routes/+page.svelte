<form method="POST" action="?/createUser">
    <input type="text" name="name" placeholder="Name" required />
    <input type="number" name="age" placeholder="Age" required />
    <input type="email" name="email" placeholder="Email" required />
    <button type="submit">Add User</button>
</form>

<!-- Button to fetch and display users -->
<button on:click={fetchUsers}>Fetch Users</button>

<!-- Display the users -->
{#if users.length > 0}
    <ul>
        {#each users as user}
            <li>
                {user.name} - {user.age} - {user.email}
                <button on:click={() => selectUser(user)}>Edit</button>
                <form method="POST" action="?/deleteUser">
                    <input type="hidden" name="id" value={user.id} />
                    <button type="submit">Delete</button>
                </form>
            </li>
        {/each}
    </ul>
{:else}
    <p>No users found.</p>
{/if}

<!-- Update Form -->
{#if selectedUser}
    <form method="POST" action="?/updateUser">
        <input type="hidden" name="id" bind:value={selectedUser.id} />
        <input type="text" name="name" bind:value={selectedUser.name} required />
        <input type="number" name="age" bind:value={selectedUser.age} required />
        <input type="email" name="email" bind:value={selectedUser.email} required />
        <button type="submit">Update User</button>
    </form>
{/if}

<script>
    import { onMount } from 'svelte';


    let users = [];
    let selectedUser = null;

    async function fetchUsers() {
        try {
            const response = await fetch('/api/getUsers');
            if (!response.ok) throw new Error('Failed to fetch users');
            users = await response.json();
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    function selectUser(user) {
        selectedUser = { ...user }; // Clone user object to avoid direct mutation
    }

    onMount(fetchUsers);
</script>
