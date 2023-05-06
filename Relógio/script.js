class Relogio {
    constructor(min,hr,seg){
        this.seg = document.querySelector(seg);
        this.min = document.querySelector(min);
        this.hr = document.querySelector(hr);
    }
    getTime(){
        const time = new Date();
        return time;
    }
    getHora(){
        return (360/12) * this.getTime().getHours();
    }
    getMinutos(){
        return (360/60) * this.getTime().getMinutes();
    }
    getSegundos(){
        return (360/60) * this.getTime().getSeconds();
    }
    rotate(){
        setInterval(()=>{
            this.seg.style.transformOrigin = "center bottom";
            this.seg.style.transform = `rotate(${this.getSegundos()}deg)`;
            this.min.style.transformOrigin = "center bottom";
            this.min.style.transform = `rotate(${this.getMinutos()}deg)`;
            this.hr.style.transformOrigin = "center bottom";
            this.hr.style.transform = `rotate(${this.getHora()}deg)`;
    },1000);
}
}
const r = new Relogio("#minutos","#horas","#segundos");
r.rotate();