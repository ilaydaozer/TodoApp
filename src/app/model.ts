export class Model{
    user;
    items;

    constructor(){
        this.user = "İlayda";
        this.items = [
                        new TodoItem("Spor",false),
                        new TodoItem("Kahvaltı", false),
                        new TodoItem("Kitap",true),
                        new TodoItem("Sinema",false),


                     ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}