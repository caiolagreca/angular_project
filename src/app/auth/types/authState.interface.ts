import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrosInterface } from './backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrosInterface | null; 
}
