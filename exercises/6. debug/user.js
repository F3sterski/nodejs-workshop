'use strict';

class User {
    constructor () {
        this.id = 1;
        this.users = [
            {
                id: this.id++,
                name: "Krzysztof",
                age: 30
            },
            {
                id: this.id++,
                name: "Maja",
                age: 23
            },
            {
                id: this.id++,
                name: "Piotr",
                age: 25
            },
            {
                id: this.id++,
                name: "Michał",
                age: 36
            }
        ];
    }

    list () {
        return this.users;
    }

    save (name, age) {
        const newUser = {
            id: this.id,
            name,
            age
        };
        this.users.push(newUser);
        return newUser;
    }

    find (userId) {
        const filteredUsers = this.users.filter(user => {
            if (user.id === userId) {
                return user;
            }
        });
        return filteredUsers.length === 0 ? {} : filteredUsers[0];
    }

}

module.exports = new User();
