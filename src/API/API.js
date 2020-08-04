import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '61dceada-f7c2-4923-8e4a-1c6dad564574'
    }
});

export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    getFriends(currentPage, pageSize, isFriend = false) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${isFriend}`)
            .then(response => response.data)
    }
};

export const authMeAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(formData) {
        return instance.post('auth/login',
            {email: formData.login, password: formData.password, rememberMe: formData.rememberMe || false})
    }
};

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
};

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
    },
    getUserId(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
};