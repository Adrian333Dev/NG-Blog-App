import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error('Error saving to localStorage: ', err);
    }
  }

  get(key: string): unknown {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (err) {
      console.error('Error getting data from localStorage: ', err);
      return null;
    }
  }
}
