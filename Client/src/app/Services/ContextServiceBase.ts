
import { BehaviorSubject } from 'rxjs';
import { IPictureModel } from '../types';
export class ContextServiceBase {
    // The purpose of this class is to define the subject which is necessary for
    // our observer pattern to work.

    // We will use the BehaviorSubject provided by the RxJS framework.
  private source = new BehaviorSubject(null);
  constructor() { }
  // As documentation says, we simple create a new Observable with the source subject.
  context = this.source.asObservable();
  
  public add(image: IPictureModel): void {
    this.source.next(image);
  }
}