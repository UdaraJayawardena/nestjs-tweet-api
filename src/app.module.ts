import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetController } from './tweet/tweet.controller';
import { TweetService } from './tweet/tweet.service';

@Module({
  imports: [],
  controllers: [AppController, TweetController],
  providers: [AppService, TweetService],
})
export class AppModule {}
