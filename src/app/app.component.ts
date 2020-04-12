import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'depressionDetect';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
 uploadVideoStatus=false;



  constructor(private auth: AuthService,private afStorage: AngularFireStorage){ }
 

  signIn(){
    this.auth.googleSignin().then(data=>{
        console.log(data);
       
    });
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
   
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL=this.ref.getDownloadURL();
  }

showVideoUpload(){
  document.getElementById("videoUpload").style.visibility="visible";
}

  
}
