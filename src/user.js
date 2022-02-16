import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

//DB  
export const db = GUN();


//User
export const user = db.user().recall({sessionStorage: true});


//Username of user
export const username = writable('');

user.get('alias').on(v => username.set(v))

db.on('auth', async(event) => {
    const alias = user.get('alias');
    username.set(alias);

    console.log('signed in as ${alias}');
});