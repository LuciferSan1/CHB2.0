class Claim{
    constructor(){
        this.radio = createRadio();
    }

    display(){
        this.radio.position(250,150);
        this.radio.option('black',1);
        this.radio.option('pink',2);
        this.radio.option('gold',3);
        this.radio.option('blue',4);
        this.radio.option('green',5);
        this.radio.option('grey',5);
        this.radio.style('width', '60px');
    }
}