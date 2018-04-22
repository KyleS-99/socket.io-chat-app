const expect = require('expect');

const { Users } = require('./users'); 

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: 2,
            name: 'Justin',
            room: 'React Course'
        }, {
            id: 3,
            name: 'Judy',
            room: 'Node Course'
        }];
    });

    it('should add a user', () => {
        let users = new Users();
        let user = {
            id: 123,
            name: 'Kyle',
            room: 'whatever'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let result = users.removeUser(3);

        expect(result).toInclude({
            id: 3,
            name: 'Judy',
            room: 'Node Course'
        });
        expect(users.users.length).toBe(2);
    });

    it('should not a remove a user', () => {
        let result = users.removeUser(5);

        expect(result).toEqual([]);
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        let result = users.getUser(3);

        expect(result).toInclude({
            id: 3,
            name: 'Judy',
            room: 'Node Course'
        });
        expect(users.users.length).toBe(3);
    });

    it('should not find user', () => {
        let result = users.getUser(5);

        expect(result).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Judy']);
    });

    it('should return names for react course', () => {
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Justin']);
    });
});