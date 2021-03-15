
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild,AfterViewInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import videojs from "video.js";

@Component({
  selector: 'app-vjs-player',
  templateUrl:"./vjs-player.component.html",
  styleUrls: [
  '../../assets/vjs-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy {
  @Input() mySource:object;
  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/maintutorial-options.html
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  player: videojs.Player;
  errorMessage="your browser does nt support video tag"
  name:string='';
started=false
  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.mySource);
  }

  ngOnInit() {
    // instantiate Video.js
    let myobj=JSON.stringify(this.mySource);
    let NewSource=JSON.parse(myobj);
    let FinalSource=JSON.parse(NewSource);
    console.log("MY OBJECT",FinalSource);
    console.log("mySource>>",this.mySource)
    console.log("type>>",typeof(this.mySource))
    this.player = videojs(this.target.nativeElement, FinalSource, function onPlayerReady() {
       console.log('onPlayerReady', this);
    });
  }

//   startVideo(){
//   this.started=true
//   console.log(this.started)
//     let videoPlayer=this.elementRef.nativeElement.getElementById("videop")
//     let sourcePlayer=<HTMLVideoElement>document.getElementById("video1")
//     sourcePlayer.setAttribute('src', this.name);

//     // videoPlayer.appendChild(sourcePlayer);
//     videoPlayer.load();
//      videoPlayer.play();
// this.errorMessage=''
//    console.log(sourcePlayer)
//   }
  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}