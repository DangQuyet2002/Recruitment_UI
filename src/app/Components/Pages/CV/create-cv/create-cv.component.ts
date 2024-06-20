import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import WebViewer, { WebViewerInstance } from "@pdftron/webviewer";
import { ToastrService } from 'ngx-toastr';
import { Subject } from "rxjs";

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements AfterViewInit { // Sửa đổi từ OnInit thành AfterViewInit
  wvInstance?: WebViewerInstance;

  @ViewChild('viewer', { static: false }) viewer!: ElementRef;

  @Output() coreControlsEvent: EventEmitter<string> = new EventEmitter();

  private documentLoaded$: Subject<void>;
  selectedTemplateLink: string = '';
  idUser= '';

  constructor(private route: ActivatedRoute , private http: HttpClient,private toastr: ToastrService) {
    this.documentLoaded$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.getToken()
    // Lấy tham số selectedTemplateLink từ route
    this.route.params.subscribe(params => {
      if (params['selectedTemplateLink']) {
        this.selectedTemplateLink = params['selectedTemplateLink'];
        this.openDocument(this.selectedTemplateLink);
      } else {
        console.error("Tham số 'selectedTemplateLink' không tồn tại trong route.");
      }
    });
  }


  public getToken(): string | null {
    var authUserData = localStorage.getItem('userid');
    if (authUserData) {
        return this.idUser = authUserData;
    } else {
        return null;
    }
  }

  ngAfterViewInit() { // Thêm phương thức ngAfterViewInit
    setTimeout(() => {
      this.openDocument(this.selectedTemplateLink);
    });
  }

  openDocument(docLink: string): void {
    if (this.viewer && this.viewer.nativeElement) {
      WebViewer({
        path: 'assets/lib',
        initialDoc: docLink,
        enableOfficeEditing: true,
      }, this.viewer.nativeElement).then((instance: WebViewerInstance) => {
        this.wvInstance = instance;
      }).catch(error => {
        console.error('Error initializing WebViewer:', error);
      });
    } else {
      console.error('Viewer element is not available.');
    }
  }

  saveDocument(fileName: string): void {
    if (!fileName) {
      this.toastr.warning('Bạn Chưa Nhập Tên File', 'Warning', {
        timeOut: 3000,
      });
      return;
    }

    if (this.wvInstance && this.wvInstance.Core && this.wvInstance.Core.documentViewer) {
      const documentViewer = this.wvInstance.Core.documentViewer;

      if (documentViewer.getDocument()) {
        documentViewer.getDocument().getFileData({}).then((data: ArrayBuffer) => {
          this.convertDocxToPdf(data, fileName).then((pdfData: ArrayBuffer) => {
            const mimeType = 'application/pdf'; // MIME type cho file PDF
            const blob = new Blob([pdfData], { type: mimeType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName}.pdf`; // Tên file với phần mở rộng là .pdf
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }).catch(error => {
            console.error('Error converting document to PDF:', error);
          });
        }).catch(error => {
          console.error('Error saving document:', error);
        });
      } else {
        console.error('Document is not available.');
      }
    } else {
      console.error('Document viewer is not available.');
    }
  }

  convertDocxToPdf(docxData: ArrayBuffer, fileName: string): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://localhost:44372/api/CVs/convert-docx-to-pdf?fileName=${encodeURIComponent(fileName)}&Id=${encodeURIComponent(this.idUser)}`, true);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.responseType = 'arraybuffer';

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error(`Failed to convert DOCX to PDF: ${xhr.statusText}`));
        }
      };

      xhr.onerror = () => reject(new Error('Network error'));

      xhr.send(docxData);
    });
  }

  save(fileName: string): void {
    if (!fileName) {
      this.toastr.warning('Bạn Chưa Nhập Tên File', 'Warning', {
        timeOut: 3000,
      });
      return;
    }

    if (this.wvInstance && this.wvInstance.Core && this.wvInstance.Core.documentViewer) {
      const documentViewer = this.wvInstance.Core.documentViewer;

      if (documentViewer.getDocument()) {
        documentViewer.getDocument().getFileData({}).then((data: ArrayBuffer) => {
          this.SaveconvertDocxToPdf(data, fileName).then((pdfData: ArrayBuffer) => {
            const mimeType = 'application/pdf'; // MIME type cho file PDF
            const blob = new Blob([pdfData], { type: mimeType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName}.pdf`; // Tên file với phần mở rộng là .pdf
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }).catch(error => {
            console.error('Error converting document to PDF:', error);
          });
        }).catch(error => {
          console.error('Error saving document:', error);
        });
      } else {
        console.error('Document is not available.');
      }
    } else {
      console.error('Document viewer is not available.');
    }
  }

  SaveconvertDocxToPdf(docxData: ArrayBuffer, fileName: string): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://localhost:44372/api/CVs/save-filepdf?fileName=${encodeURIComponent(fileName)}`, true);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.responseType = 'arraybuffer';

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error(`Failed to convert DOCX to PDF: ${xhr.statusText}`));
        }
      };

      xhr.onerror = () => reject(new Error('Network error'));

      xhr.send(docxData);
    });
  }
}
