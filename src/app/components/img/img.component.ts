import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded: EventEmitter<string> = new EventEmitter<string>();
  imageDefault: string = './assets/images/default.png';

  constructor() {
    console.log("constructor()", 'imgValue => ', this.img);
  }

  ngOnInit(): void {
    //before render
    //async - once time
    console.log("ngOnInit()", 'imgValue => ', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before - during render
    //changes inputs - times
    console.log("ngOnChanges()", 'imgValue => ', this.img);
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log("ngAfterViewInit()", 'imgValue => ', this.img);
  }

  ngOnDestroy(): void {
    //delete
    console.log("ngOnDestroy()", 'imgValue => ', this.img);
  }

  imgError(){
    console.log('imgError()');
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('imgLoaded()');
    this.loaded.emit(this.img);
  }

}
