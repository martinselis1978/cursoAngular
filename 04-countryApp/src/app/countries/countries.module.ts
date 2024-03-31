import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  declarations: [
    CountriesComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    CountryPageComponent
]
})
export class CountriesModule { }
