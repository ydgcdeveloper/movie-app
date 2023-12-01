import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { moviesData } from 'src/app/core/data/movies.data';
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite';
// import { db } from 'src/app/firebase/firebase';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  async getMovies(): Promise<any> {
    // const moviesCol = collection(db, 'movie');
    // const moviewSnapshot = await getDocs(moviesCol);
    // const movieList = moviewSnapshot.docs.map((doc) => {
    //   return {
    //     ...doc.data(),
    //     id: doc.id
    //   }
    // });
    return moviesData;
  }
}
