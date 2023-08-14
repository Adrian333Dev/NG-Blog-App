import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl = environment.apiUrl;
  req = req.clone({ url: `${apiUrl}${req.url}` });
  return next(req);
};
