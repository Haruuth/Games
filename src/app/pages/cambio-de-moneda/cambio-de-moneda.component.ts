import { Component, OnInit } from '@angular/core';
import { MonedasService } from 'src/app/shared/monedas.service';


@Component({
  selector: 'app-cambio-de-moneda',
  templateUrl: './cambio-de-moneda.component.html',
  styleUrls: ['./cambio-de-moneda.component.scss']
})
export class CambioDeMonedaComponent implements OnInit{

  exchanges: any = []
  cambio: any = null;
  currency: any = []
  monedaPrincipal = 'EUR'

  constructor(private servicioMoneda: MonedasService){}


  ngOnInit(): void {
    this.servicioMoneda.getMonedas().subscribe((res: any) =>{
      this.currency = res;
      for (const key in res.rates){
        this.exchanges.push({name: key, value: res.rates[key]})
      }
    });
  }
    cambioMoneda(event: any): void{
      const base = (event.target as HTMLSelectElement).value
      this.servicioMoneda.cambioMonedaDin(base).subscribe((res: any)=>{
        this.exchanges = [];
        for (const key in res.rates){
          this.exchanges.push({ name: key, value: res.rates[key] })
        }
      })
    }  
}
