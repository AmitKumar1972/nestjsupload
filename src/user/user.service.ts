import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async upload(req: any) {
    console.log('1');
    return { success: true, message: 'uploaded' };
  }
}
