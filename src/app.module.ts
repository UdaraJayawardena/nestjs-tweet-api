import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TweetController } from './tweet/tweet.controller';

import { AppService } from './app.service';
import { TweetService } from './tweet/tweet.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TweetController],
  providers: [AppService, PrismaService, TweetService],
})
export class AppModule {}
