import {MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatCardModule, MatProgressSpinnerModule],
    exports: [MatButtonModule, MatInputModule, MatCardModule, MatProgressSpinnerModule]
})

export class MaterialModule{ }