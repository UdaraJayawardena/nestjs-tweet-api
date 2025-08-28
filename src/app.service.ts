import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStartUpMessage(): string {
    return 'Tweet Service Backend is Running!';
  }
}
