import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, forkJoin } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Evento } from 'src/app/shared/models/Evento';
import { EventoService } from 'src/app/shared/services/evento.service';
import { Lote } from 'src/app/shared/models/Lote';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-eventos-detail',
  templateUrl: './eventos-detail.component.html',
  styleUrls: ['./eventos-detail.component.scss'],
})
export class EventosDetailComponent implements OnInit {
  private unsub$ = new Subject();

  lotesParalelosFiltro: any[] = [];
  evento: Evento | any;
  form: FormGroup | any;
  eventoId: number | any;
  file: File | any;
  imagemURL = 'assets/img/upload.png';

  get lotesArray(): FormArray {
    return this.form.get('lotes') as FormArray;
  }

  get isNew() {
    return !this.eventoId;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private eventoService: EventoService
   ) {}

  ngOnInit(): void {
    this.eventoId = this.route.snapshot.params.id;

    this.createForm();
    this.carregarFormulario();
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  createForm() {
    this.form = this.formBuilder.group({
      evento: this.formBuilder.group({
        id: [null],
        local: [null, [Validators.required]],
        dataEvento: [null, [Validators.required]],
        tema: [null, [Validators.required]],
        qtdPessoas: [null,[Validators.required ]],
        imagemURL: [''],
        telefone: [null,[Validators.required]],
        email: [null,[Validators.required]],
      }),
      lotes: this.formBuilder.array([this.createLoteForm()]),
    });
  }

  carregarFormulario() {
    if (!this.isNew) {
      this.eventoService.obterEvento(this.eventoId)
        .subscribe((evento: any) => {
          this.evento = evento;

          this.updateEventoForm(evento);

        }, (error: any) => {
          // this.showToastError(error);
          this.router.navigate(['/eventos']);
        });
    }
  }

  updateEventoForm(evento: Evento): any {
    this.form.patchValue({
      evento: {
        id: evento.id,
        local:evento.local,
        dataEvento:evento.dataEvento,
        tema:evento.tema,
        qtdPessoas:evento.qtdPessoas,
        // imagemURL:evento.imagemUrl,
        telefone:evento.telefone,
        email:evento.email,
      }
    });
    this.imagemURL = environment.apiURL + 'resources/imagens/' + this.evento.imagemUrl;
    this.updateLotesForm(evento.lotes);
  }

  updateLotesForm(lote: Lote[]): void {
    this.form.controls.lotes = this.formBuilder.array([]);

    lote
      .forEach((lote, index) => {

        const formGroup = this.lotesArray.at(index);

        if (!formGroup)
          this.addLote();

        this.lotesArray.at(index).patchValue({
          remover: false,
          id: lote.id,
          nome: lote.nome,
          preco: lote.preco,
          dataInicio: lote.dataInicio,
          dataFim: lote.dataFim,
          quantidade: lote.quantidade,
          eventoId: lote.eventoId,
        });
        this.lotesParalelosFiltro.push(this.lotesArray.at(index).value);
      });
  }


  createLoteForm(loteModel?: Lote): FormGroup {
    const { id, nome, preco, dataInicio, dataFim, quantidade,eventoId, remover } = loteModel
      || { id: 0, nome: null, preco: 0, dataInicio: null, dataFim: null, quantidade: null,eventoId: null, remover: false };

    const form = this.formBuilder.group({
      id: [id],
      nome: [nome, [Validators.required]],
      preco: [preco, null],
      dataInicio: [dataInicio, null],
      dataFim: [dataFim, []],
      quantidade: [quantidade, [Validators.required, Validators.min(0)]],
      eventoId: [eventoId, []],
      remover: [remover]
    });

    return form;
  }

  addLote(){
    this.lotesArray.push(this.createLoteForm());
  }

  removeLote(index: number): void {
    const removerControl = this.lotesArray.at(index).get('remover');

    if (!!removerControl) {
       this.lotesArray.removeAt(index);
      this.lotesParalelosFiltro[index].remover = true
      removerControl.setValue(true);
    }
  }

  onFileChange(ev: any): void {
    const reader = new FileReader();

    reader.onload = (event: any) => this.imagemURL = event.target.result;

    this.file = ev.target.files;
    reader.readAsDataURL(this.file[0]);

    this.uploadImagem();
  }

  uploadImagem(): void {
    this.eventoService.postUpload(this.eventoId, this.file).subscribe(
      () => {
        // this.carregarEvento();
        // this.toastr.success('Imagem atualizada com Sucesso', 'Sucesso!');
      },
      (error: any) => {
        // this.toastr.error('Erro ao fazer upload de imagem', 'Erro!');
        console.log(error);
      }
    )
  }


  submit(): void {

    let form = this.form.getRawValue();

    form.lotes.map((lote: Lote, index: any | any) => {
      if (lote.id == 0)
        this.lotesParalelosFiltro.push({
          remover: lote.remover,
          id: lote.id,
          nome: lote.nome,
          preco: lote.preco,
          dataInicio: lote.dataInicio,
          dataFim: lote.dataFim,
          quantidade: lote.quantidade,
          eventoId: lote.eventoId,
        });
      else
        this.lotesParalelosFiltro[index] = {
          id: lote.id,
          remover: lote.remover,
          nome: lote.nome,
          preco: lote.preco,
          dataInicio: lote.dataInicio,
          dataFim: lote.dataFim,
          quantidade: lote.quantidade,
          eventoId: lote.eventoId,
        };
    });
    const formEvento = {
      id : this.eventoId,
      Local : form.evento.local,
      DataEvento : form.evento.dataEvento,
      Tema : form.evento.tema,
      QtdPessoas : form.evento.qtdPessoas,
      ImagemUrl : form.evento.imagemURL,
      Telefone : form.evento.telefone,
      Email : form.evento.email,
      lotes: this.lotesParalelosFiltro
    };

    const request = (this.isNew)
      ? this.eventoService.incluirEvento(formEvento)
      : this.eventoService.atualizarEvento(formEvento);

    request.subscribe(
      res => {
        if (res.success) {
          // this.toastr.success('Tecnologia salva com sucesso');
          this.router.navigate(['/eventos']);
          return;
        }
        // this.showToastError(res);
      },
      error => {
        // this.showToastError(error);
      }
    );
  }
}
