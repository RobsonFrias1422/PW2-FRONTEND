import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';

const routes: Routes = [
  { path:'projetos',
  component:ListaProjetosComponent
  },

  { path:'novo',
  component:NovoProjetoComponent
  },

  { path:'detalhe-projeto/:id',
  component:DetalheProjetoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
