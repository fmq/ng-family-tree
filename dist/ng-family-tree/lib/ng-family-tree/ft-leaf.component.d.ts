import { EventEmitter } from '@angular/core';
import { Family } from '../models/ng-family.model';
export declare class FtLeafComponent {
    child: Family;
    onLeafSelected: EventEmitter<Family>;
    constructor();
    _leafSelected(_leaf: any): void;
}
