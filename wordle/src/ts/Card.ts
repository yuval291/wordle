export class Card{

    char:string;
    id:string;
    // status : 'empty'|'wrong'|'exists'|'exact';
    // content : ''|string;

    // constructor(status:'empty'|'wrong'|'exists'|'exact',content:''|string) {
    //     this.status=status;
    //     this.content=content;
    //     this.char='';
    //     this.id = "CARD_"+(Math.random()*100000)+performance.now().toString();
    // }

    constructor() {
            this.char='';
            this.id = "CARD_"+(Math.random()*100000)+performance.now().toString();
    }

    render(){
        let obj = `<div class = 'card' id='${this.id}'></div>`;
        return obj;
    }

    afterRender(){
        let x = document.getElementById(this.id);
    }



}