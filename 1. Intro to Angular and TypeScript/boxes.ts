class Box {
    private boxes: any[] = [];

    add(element: any):void {
        this.boxes.push(element);
    }
    remove():void{
        this.boxes.pop();
    }
    get count(): number{
        return this.boxes.length;
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
