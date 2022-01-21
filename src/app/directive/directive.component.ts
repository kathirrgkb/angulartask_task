import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  astrology : any = [
    { name: 'Aries' , duration: 'Mar 21 - Apr 20', ZodicClassName: `zodicTypeOne-aries` , textColor: `#F2B12F`},
    { name: 'Taurus' , duration: 'Apr 21 - May 20', ZodicClassName: `zodicTypeOne-taurus`, textColor: `#AF8D4A`},
    { name: 'Gemini' , duration: 'May 21 - Jun 21', ZodicClassName: 'zodicTypeOne-gemini', textColor: `#F9DC5F`},
    { name: 'Cancer' , duration: 'Jun 22 - Jul 22', ZodicClassName: 'zodicTypeOne-cancer', textColor: `#58D1DD`},
    { name: 'Leo' , duration: 'Jul 23 - Aug 22', ZodicClassName: 'zodicTypeOne-leo', textColor: `#F2B12F`},
    { name: 'Virgo' , duration: 'Aug 23 - Sep 21', ZodicClassName: 'zodicTypeOne-virgo', textColor: `#AF8D4A`},
    { name: 'Libra' , duration: 'Sep 23 - Oct 22', ZodicClassName: 'zodicTypeOne-libra', textColor: `#F9DC5F`},
    { name: 'Scorpio' , duration: 'Oct 23 - Nov 22', ZodicClassName: 'zodicTypeOne-scorpio', textColor: `#58D1DD`},
    { name: 'Saggitarius' , duration: 'Nov 23 - Dec 21', ZodicClassName: 'zodicTypeOne-sagittarius', textColor: `#F2B12F`},
    { name: 'Capricorn' , duration: 'Dec 22 - Jan 20', ZodicClassName: 'zodicTypeOne-capricornus', textColor: `#AF8D4A`},
    { name: 'Aquarius' , duration: 'Jan 21 - Feb 19', ZodicClassName: 'zodicTypeOne-aquarius', textColor: `#F9DC5F`},
    { name: 'Pisces' , duration: 'Feb 20 - Mar 20', ZodicClassName: 'zodicTypeOne-pisces', textColor: `#58D1DD`}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
