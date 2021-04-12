import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearcImgComponent } from './searc-img/searc-img.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearcImgComponent,
    SidebarComponent,
    HomeComponent,
  ],
  exports: [
    HeaderComponent,
    SearcImgComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
