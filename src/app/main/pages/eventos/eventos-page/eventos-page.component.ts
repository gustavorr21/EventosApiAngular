import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Subject } from 'rxjs';

import { debounceTime, takeUntil } from 'rxjs/operators';
import { Evento } from 'src/app/shared/models/Evento';
import { EventoService } from 'src/app/shared/services/evento.service';






@Component({
  selector: 'app-eventos-page',
  templateUrl: './eventos-page.component.html',
  styleUrls: ['./eventos-page.component.scss'],
})
export class EventosPageComponent implements OnInit {

  private unsub$ = new Subject();

  form: FormGroup | any;

  eventos: {
    totalCount: 0;
    pageSize: 25;
    page: [];
  } | any;

  columnsToDisplay = [
    'local',
    'tema',
    'qtdPessoas',
    'email',
    'lotes',
    'imagemUrl',
    'telefone',
    'acoes'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.carregarEventos();
  }

  ngAfterViewInit(): void {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .subscribe((data: Sort | any | PageEvent) => {
        this.carregarEventos();
      });

    
    this.carregarEventos();
  }

  public carregarEventos(): void {
    this.eventoService.getEventos().subscribe((retorno) => {
      this.eventos = retorno;
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
