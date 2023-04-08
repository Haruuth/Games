import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuentraElTesoroComponent } from './pages/encuentra-el-tesoro/encuentra-el-tesoro.component';
import { WhackAMoleComponent } from './pages/whack-a-mole/whack-a-mole.component';
import { CambioDeMonedaComponent } from './pages/cambio-de-moneda/cambio-de-moneda.component';

const routes: Routes = [

{
  path: '', 
  component: EncuentraElTesoroComponent
},{
  path: 'whackamole',
  component: WhackAMoleComponent
},{
  path: 'cambio',
  component: CambioDeMonedaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
