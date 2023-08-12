import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { PersistenceService } from '@shared/services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const persistanceService = inject(PersistenceService);
  const token = persistanceService.get('accessToken');
  req = req.clone({
    setHeaders: { Authorization: token ? `Token ${token}` : '' },
  });
  return next(req);
};
