class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        return this.users.filter((user, index) => user.id === id ? this.users.splice(index, 1) : false)[0];
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserList (room) {
        let users = this.users.filter((user) => user.room === room);
        return users.map((user) => user.name);
    }
}

module.exports = { Users };