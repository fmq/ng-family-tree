import { EventEmitter, OnInit } from '@angular/core';
import { Family } from '../models/family.model';
export declare class NgFamilyTreeComponent implements OnInit {
    family: Family;
    onLeafSelected: EventEmitter<Family>;
    constructor();
    ngOnInit(): void;
    _leafSelected(_leaf: any): void;
    _setWidth(child: Family): boolean;
}
