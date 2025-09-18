import { DecimalPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    imports: [
        NgForOf,
        DecimalPipe
    ]
})
export class BenefitsComponent {
    readonly benefitList = [
        {
            icon:'',
            title: 'Amplify Insights',
            description: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
        },
        {
            icon:'',
            title: 'Control Your Global Presence',
            description: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
        },
        {
            icon:'',
            title: 'Remove Language Barriers',
            description: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
        },
        {
            icon:'',
            title: 'Visualize Growth',
            description: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
        }
    ];

    readonly bigPictureList = [
        "Spot Trends in Seconds: No more digging through numbers. ",
        "Get Everyone on the Same Page: Share easy-to-understand reports with your team. ",
        "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
        "Your Global Snapshot: Get a quick, clear overview of your entire operation."
    ]
}