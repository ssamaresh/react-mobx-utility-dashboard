import { observable , decorate } from 'mobx';

class TodoStore {
    items = [];

    onSubmit = todo => {
        this.items.push(todo);
    };
};

export default decorate(TodoStore, {
    items: observable
});