import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
    ngOnInit() { }
    about_us: { heading: string, sub_heading: string, description: string } = {
        description: `if you've ever thought of combining the human brain with superb technologies for your business needs them you 
            better make decisions with Danalitic the best AI Venture Tech Platform provides you with automated decision making, prediction,
            personalization & recommendation in real time, which is a built on Genomic Science, Psychology and Neuroscience Capabilities,
            Voice + WebSdk + Mobile is all that we do when you trust us for making your entity a fruitful and with your investment in
            Data Analytics.`,
        sub_heading: 'We Create The Most Realistic AI Enabled Humanise Interactions For Deeper Engagement',
        heading: 'About Us'
    };
}
