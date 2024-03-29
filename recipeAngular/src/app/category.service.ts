import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Category } from '../entities/Category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryList: Category[] = null;

  constructor(private http: HttpClient) {}
  
  getCategoryList(): Observable<Category[]> {
    if (this.categoryList) {
      return of(this.categoryList);
    } 
    else {
      return this.http.get<Category[]>('https://localhost:7182/api/Category').pipe(
        map((res) => {
          this.categoryList = res;
          return res;
        }),
      );
    }
  }
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`https://localhost:7182/api/Category/${id}`);
  }
}