export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/rappi4A/';

export const token = {
    header:{
        auth: localStorage.getItem("token"),
    }
} 