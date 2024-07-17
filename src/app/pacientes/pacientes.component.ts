import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatCardModule],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacientesComponent {

}
