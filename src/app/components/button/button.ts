import { Component } from '@angular/core'
import { Input } from '@angular/core'

@Component({
    selector: 'app-button',
    imports: [],
    templateUrl: './button.html',
    styleUrl: './button.css',
})
export class Button {
    @Input() text: string = ''
    @Input() color: string = ''
}
