import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private callback: Function;
  private fileInput: HTMLInputElement;
  //private valueChangesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  //private valueChanges: Observable<any[]> = this.valueChangesSubject.asObservable();

  constructor() {
    this.fileInput = document.createElement('input');
    //this.fileInput.style.display = 'none';
    this.fileInput.type = 'file';
    this.fileInput.addEventListener('change', (event: any) => {
      const reader = new FileReader();
      this.loadValue(event.target.files);
    });
  }
  private loadValue(files) {
    if (files && files.length > 0) {
      let data: any[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          data.push(Object.assign(file, {
            data: reader.result
          }));
          if (data.length == files.length) {
            //this.valueChangesSubject.next(data.length > 0 ? data : null);
            this.callback(data.length > 0 ? data : null);
            this.fileInput.value = null;
          }
        };
      }
    }
  }
  public open(callback?: Function, options?: { accept?: string, multiple?: boolean }) {
    this.fileInput.accept = options && options.accept ? options.accept : '';
    this.fileInput.multiple = options && options.multiple;
    this.fileInput.click();
    this.callback = callback;
  }
}
