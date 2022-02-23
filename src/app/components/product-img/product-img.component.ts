import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss']
})
export class ProductImg implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';
  alt: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log("change just img => ", this.img);
  }
  @Input('alt')
  set changeAlt(newAlt: string) {
    this.alt = newAlt;
  }

  @Output() loaded: EventEmitter<string> = new EventEmitter<string>();
  imageDefault: string = './assets/images/default.png';
  counter: number = 0;
  counterFn: number | undefined;

  constructor() {
    console.log("constructor()", 'imgValue => ', this.img);
  }

  ngOnInit(): void {
    //before render
    //async - once time
    console.log("ngOnInit()", 'imgValue => ', this.img);
    this.counterFn = window.setInterval(()=>{
      this.counter++;
      console.log('run counter');
    },1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before - during render
    //changes inputs - times
    console.log("ngOnChanges()", 'imgValue => ', this.img);
    console.log("changes", changes);
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log("ngAfterViewInit()", 'imgValue => ', this.img);
  }

  ngOnDestroy(): void {
    //delete
    console.log("ngOnDestroy()", 'imgValue => ', this.img);
    window.clearInterval(this.counterFn);
  }

  imgError(): void{
    console.log('imgError()');
    this.img = this.imageDefault;
  }

  imgLoaded(): void{
    console.log('imgLoaded()');
    this.loaded.emit(this.img);
  }

}
