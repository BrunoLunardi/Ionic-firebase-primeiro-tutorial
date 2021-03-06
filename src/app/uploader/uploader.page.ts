import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  imageURL: string;

  // construtor para upload de imagem, utiliza uploadcare.com
  constructor(public http: Http) { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.target.files;
    // console.log(files);

    const data = new FormData();
    // Configurações para upload de arquivos
    data.append('file', files[0]);
    data.append('UPLOADCARE_STORE', '1');
    // KEY do site uploadcare
    data.append('UPLOADCARE_PUB_KEY', '05f29ba98127eb64006f');

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      console.log(event);
      this.imageURL = event.json().file;
    });
  }

}
