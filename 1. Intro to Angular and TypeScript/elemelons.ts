abstract class Melon{
    weigth: number;
    melonSort: string;

    constructor(weigth: number, melonSort: string){
        this.weigth = weigth;
        this.melonSort = melonSort;
    }
    get elementIndex(): number{
        return this.weigth * this.melonSort.length;
    }

}

class Watermelon extends Melon{
    element: string;
    constructor(weigth:number, melonSort: string){
        super(weigth,melonSort),
        this.element= 'Water';
    }
    toString(){
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;   
    }

}

class Firemelon extends Melon{
    element: string;
    constructor(weigth:number, melonSort: string){
        super(weigth,melonSort),
        this.element= 'Fire';
    }
    toString(){
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;   
    }

}

class Earthmelon extends Melon{
    element: string;
    constructor(weigth:number, melonSort: string){
        super(weigth,melonSort),
        this.element= 'Earth';
    }
    toString(){
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;   
    }

}

class Airmelon extends Melon{
    element: string;
    constructor(weigth:number, melonSort: string){
        super(weigth,melonSort),
        this.element= 'Air';
    }
    toString(){
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;   
    }

}

class Melolemonmelon extends  Watermelon{
    private elementArr:string[] = ['Water', 'Fire', 'Earth', 'Air'];
    constructor(weigth:number, melonSort: string){
        super(weigth,melonSort)
        this.morph();
    }
    morph():void{
       const el = this.elementArr.shift();
        this.elementArr.push(el);
        this.element = el;
        }
}

let test : Melon = new Melon(100, "Test");
//Throws error

let watermelon : Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());