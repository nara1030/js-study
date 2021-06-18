// Promise : 더 이상 Callback을 전달받지 않기에 API 자체도 깔끔해졌다.
// Virtual server
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'hje' && password === 'qwe') ||
                    (id === 'admin' && password === 'test')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'admin') {
                    resolve({ name: 'admin', role: 'admin'});
                } else if (user === 'hje') {
                    resolve({ name: 'hje', role: 'user'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    // .then(console.log);
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);