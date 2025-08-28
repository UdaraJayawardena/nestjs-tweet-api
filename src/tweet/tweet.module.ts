import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtStrategy } from '../auth/strategies/jwt.strategy';

import { TweetService } from './tweet.service';
import { PrismaService } from '../prisma/prisma.service';

import { TweetController } from './tweet.controller';


@Module({
    imports: [
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [TweetController],
  providers: [TweetService, JwtStrategy, PrismaService],
})
export class TweetModule {}
